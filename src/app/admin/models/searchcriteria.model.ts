export class SearchCriteria {
  fieldName: string;
  searchType: string;
  value;

  constructor(fieldName: string, searchType: string, value) {
    this.fieldName = fieldName;
    this.searchType = searchType;
    this.value = value;
  }
}
