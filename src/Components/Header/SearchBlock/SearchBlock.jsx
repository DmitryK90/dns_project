import { useState } from "react";
import SearchBlockClose from "./SearchBlockClose";
import SearchBlockOpen from "./SearchBlockOpen";

const SearchBlock = () => {
  const [open, setOpen] = useState(false); // в фокусе поиск или нет.
  return (
    <>
      {open ? (
        <SearchBlockOpen setOpen={setOpen} />
      ) : (
        <SearchBlockClose setOpen={setOpen} />
      )}
    </>
  );
};

export default SearchBlock;
