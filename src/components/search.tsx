
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Search as SearchIcon } from 'lucide-react';
import { Input } from '@/components/ui/input';

export default function Search() {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <form onSubmit={handleSearch} className="relative ml-auto flex-1 sm:flex-initial">
      <div className="relative">
        <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" aria-hidden="true" />
        <Input
          type="search"
          placeholder="Search calculators..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
          aria-label="Search calculators, tools, and pages"
        />
      </div>
    </form>
  );
}
