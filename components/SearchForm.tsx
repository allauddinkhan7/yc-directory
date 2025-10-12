import Form from "next/form";
import SearchFormReset from "@/components/SearchFormReset";
import { Search } from "lucide-react";

const SearchForm = ({query}: {query?: string}) => {
  console.log("SearchForm query:", query);
  return (
    // This Next js Form updates the URL query parameter without a full page reload
    // This is useful for search forms where you want to update the results based on the query
    // fully functional url modifying server render form


    <Form action="/" scroll={false} className="search-form">
      <input
        name="query"
        defaultValue={query} // if query is undefined, it will be an empty string and inside in
        className="search-input"
        placeholder="Search Startups"
      />

      <div className="flex gap-2">
        {
          //when there is a query, show the reset button
          query && <SearchFormReset />
        }

        <button type="submit" className="search-btn text-white">
          <Search className="size-5" />
        </button>
      </div>
    </Form>
  );
};

export default SearchForm;
