'use server';

/**
 * @fileOverview Implements a flow to suggest relevant formulas from a formula library based on a natural language description.
 *
 * - smartFormulaSearch - A function that accepts a natural language query and returns a list of relevant formulas.
 * - SmartFormulaSearchInput - The input type for the smartFormulaSearch function.
 * - SmartFormulaSearchOutput - The return type for the smartFormulaSearch function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SmartFormulaSearchInputSchema = z.object({
  query: z.string().describe('A natural language description of the calculation needed.'),
});
export type SmartFormulaSearchInput = z.infer<typeof SmartFormulaSearchInputSchema>;

const SmartFormulaSearchOutputSchema = z.object({
  formulas: z
    .array(z.string())
    .describe('A list of relevant formulas from the formula library.'),
});
export type SmartFormulaSearchOutput = z.infer<typeof SmartFormulaSearchOutputSchema>;

export async function smartFormulaSearch(input: SmartFormulaSearchInput): Promise<SmartFormulaSearchOutput> {
  return smartFormulaSearchFlow(input);
}

const prompt = ai.definePrompt({
  name: 'smartFormulaSearchPrompt',
  input: {schema: SmartFormulaSearchInputSchema},
  output: {schema: SmartFormulaSearchOutputSchema},
  prompt: `You are an expert assistant that is really good at finding formulas based on the user's request.

  Find the relevant formulas for the following request:
  {{query}}
  `,
});

const smartFormulaSearchFlow = ai.defineFlow(
  {
    name: 'smartFormulaSearchFlow',
    inputSchema: SmartFormulaSearchInputSchema,
    outputSchema: SmartFormulaSearchOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
