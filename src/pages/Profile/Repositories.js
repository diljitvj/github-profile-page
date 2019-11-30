import React, { useState } from "react";
import PropTypes from "prop-types";

import { Search, Dropdown, FilterSummary, Button } from "../../components";
import { TYPES, LANGUAGES } from "../../constants";
import { RepositoryDetail } from "../../fragments";
import { RepositoryIcon } from "../../icons";
import styles from "./style.module.css";

const initialFilterValue = {
  searchText: "",
  type: "all",
  language: "all"
};

const Repositories = ({ repositories }) => {
  // States
  const [filter, setFilter] = useState(initialFilterValue);

  // Functions
  const setSearchText = searchText => setFilter({ ...filter, searchText });
  const setLanguageFilter = language => setFilter({ ...filter, language });
  const setTypeFilter = type => setFilter({ ...filter, type });
  const clearFilter = () => setFilter(initialFilterValue);

  const isFilterApplied = () =>
    filter.searchText ||
    filter.type !== initialFilterValue.type ||
    filter.language !== initialFilterValue.language;

  const filteredRepositories = repositories.filter(r =>
    r.name.toLowerCase().indexOf(filter.searchText.toLowerCase()) !== -1 &&
    filter.language !== "all"
      ? r.language === filter.language
      : true
  );

  return (
    <div>
      <div className={styles.filter}>
        <Search
          className={styles.search}
          value={filter.searchText}
          placeholder="Find a repository..."
          onChange={setSearchText}
        />
        <Dropdown
          name="Type"
          value={filter.type}
          onChange={setTypeFilter}
          className={styles.dropdown}
          options={TYPES}
        />
        <Dropdown
          name="Language"
          className={styles.dropdown}
          value={filter.language}
          onChange={setLanguageFilter}
          options={LANGUAGES}
        />
        <Button className={styles.button}>
          <RepositoryIcon className={styles.icon} />
          New
        </Button>
      </div>
      {isFilterApplied() && (
        <div>
          <FilterSummary
            resultCount={filteredRepositories.length}
            type={filter.type}
            language={filter.language}
            onClear={clearFilter}
          />
        </div>
      )}
      {filteredRepositories.map(repository => (
        <RepositoryDetail repository={repository} key={repository.name} />
      ))}
    </div>
  );
};

Repositories.prototypes = {
  repositories: PropTypes.array.isRequired
};

export default Repositories;
