'use server';

/**
 * @fileOverview This file defines a Genkit flow for suggesting unit conversions for a given formula.
 *
 * The flow takes a formula as input and returns a list of suggested unit conversions.
 * The suggestions are based on the units identified in the formula and a knowledge base of unit conversions.
 *
 * - `suggestUnitConversions`: A function that takes a formula as input and returns a list of suggested unit conversions.
 * - `UnitConversionSuggestionsInput`: The input type for the suggestUnitConversions function.
 * - `UnitConversionSuggestionsOutput`: The return type for the suggestUnitConversions function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const UnitConversionSuggestionsInputSchema = z.object({
  formula: z.string().describe('The formula to suggest unit conversions for.'),
});
export type UnitConversionSuggestionsInput = z.infer<typeof UnitConversionSuggestionsInputSchema>;

const UnitConversionSuggestionSchema = z.object({
  value: z.string().describe('The value to convert.'),
  unit: z.string().describe('The unit of the value.'),
  suggestedUnits: z.array(z.string()).describe('The suggested units to convert to.'),
});

const UnitConversionSuggestionsOutputSchema = z.object({
  suggestions: z.array(UnitConversionSuggestionSchema).describe('The suggested unit conversions.'),
});
export type UnitConversionSuggestionsOutput = z.infer<typeof UnitConversionSuggestionsOutputSchema>;

export async function suggestUnitConversions(
  input: UnitConversionSuggestionsInput
): Promise<UnitConversionSuggestionsOutput> {
  return unitConversionSuggestionsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'unitConversionSuggestionsPrompt',
  input: {schema: UnitConversionSuggestionsInputSchema},
  output: {schema: UnitConversionSuggestionsOutputSchema},
  prompt: `You are a unit conversion expert. Given a formula, you will identify values with units and suggest alternative units for conversion.

Formula: {{{formula}}}

Provide the suggestions in JSON format.

Example:
{
  "suggestions": [
    {
      "value": "10",
      "unit": "meters",
      "suggestedUnits": ["feet", "inches", "yards"]
    },
    {
      "value": "25",
      "unit": "celsius",
      "suggestedUnits": ["fahrenheit", "kelvin"]
    }
  ]
}
`,
});

const unitConversionSuggestionsFlow = ai.defineFlow(
  {
    name: 'unitConversionSuggestionsFlow',
    inputSchema: UnitConversionSuggestionsInputSchema,
    outputSchema: UnitConversionSuggestionsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
