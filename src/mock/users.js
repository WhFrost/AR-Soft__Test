export const Users = [
  {
    id: 1,
    email: 'admin',
    active: 'true',
    user: {
      id: 1,
      name: 'lupa',
      lastName: 'pupa',
      birthDate: '2000-08-19T09:20:51.071'
    },
    roles: [
      {
        name: 'ROLE_ADMIN'
      },
      {
        name: 'ROLE_USER'
      }
    ],
    organization: {
      companyTitle: 'arSoft',
      isBlocked: false,
      license: {
        id: 1,
        endLicenseDate: '2035-08-23T13:54:31'
      },
      blocked: false
    }
  },
  {
    id: 2,
    email: 'user',
    active: true,
    user: {
      id: 3,
      name: 'lupa',
      lastName: 'pupa',
      birthDate: '2000-08-19T09:20:51.071'
    },
    roles: [
      {
        name: 'ROLE_USER',
      }
    ],
    organization: {
      companyTitle: 'arSoft',
      isBlocked: false,
      license: {
        id: 1,
        endLicenseDate: '2035-08-23T13:54:31',
      },
      blocked: false
    }
  },
];
