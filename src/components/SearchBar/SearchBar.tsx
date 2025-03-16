import { useState } from "react";
import toast from "react-hot-toast";
import s from "./SearchBar.module.css"

interface SearchBarProps {
    onSubmit: (query: string) => void;
  };

const SearchBar: React.FC<SearchBarProps> = ({ onSubmit }) =>{
    const [value, setvalue]=useState<string>("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); 
    
        if (value.trim() === "") {
            toast.error('Enter a keyword to search for images', {
                duration: 3000,
                position: 'top-left',
                style: {
                    fontFamily: 'sans-serif'
                  },
                });
            
          return;
        };
        onSubmit(value);
    };

    return(
        <header className={s.header}>
           <form className={s.form} onSubmit={handleSubmit}>
             <input className={s.searchInput} type="text" autoComplete="off" autoFocus placeholder="Search images and photos" 
             value={value}
             onChange={(e: React.ChangeEvent<HTMLInputElement>) => setvalue(e.target.value)}/>
            <button className={s.button} type="submit">Search</button>
            </form>
        </header>

    );
};

export default SearchBar;