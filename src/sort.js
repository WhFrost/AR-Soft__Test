export const sortingFunc = (sortType) => {
  if (sortType === 'name') {
    return (a, b) => a.user.name > b.user.name;
  }
  if (sortType === 'lastName') {
    return (a, b) => a.user.lastName > b.user.lastName;
  }
  if (sortType === 'email') {
    return (a, b) => a.email > b.email;
  }
  if (sortType === 'role') {
    return(a, b) => a.role.name > b.role.name;
  }
  if (sortType === 'organization') {
    return(a, b) => a.organization.companyTitle > b.organization.companyTitle;
  }
};

