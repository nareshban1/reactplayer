import React, { useState } from 'react'
import { SearchForm, SearchBarContainer, SearchInput, SearchButton } from './LinkInputStyles'
const LinkInput = ({ setLink }) => {
    const [searchQuery, setSearchQuery] = useState("");



    const handleSearch = (e) => {
        e.preventDefault();
        setLink(searchQuery);
        setSearchQuery("");

    }
    return (
        <SearchBarContainer>
            <SearchForm onSubmit={handleSearch}>
                <SearchInput
                    type="text"
                    placeholder="Enter Link"
                    value={searchQuery}
                    onChange={(e) => {
                        setSearchQuery(e.target.value);
                    }}
                />
                <SearchButton type="submit" disabled={searchQuery === ""}>Use Link</SearchButton>
            </SearchForm>
        </SearchBarContainer>
    );
}

export default LinkInput
