export const sortingFunc = (sortType) => {
  if (sortType === 'name') {
    return (a, b) => a.user.name > b.user.name ? 1 : -1;
  }
  if (sortType === 'lastName') {
    return (a, b) => a.user.lastName > b.user.lastName ? 1 : -1;
  }
  if (sortType === 'email') {
    return (a, b) => a.email > b.email ? 1 : -1;
  }
  if (sortType === 'role') {
    return(a, b) => a.role.name > b.role.name ? 1 : -1;
  }
  if (sortType === 'organization') {
    return(a, b) => a.organization.companyTitle > b.organization.companyTitle ? 1 : -1;
  }
};

