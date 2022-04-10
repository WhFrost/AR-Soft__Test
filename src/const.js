export const USER_ROLE = [
  {
    name: 'User',
    value: 'ROLE_USER'
  },
  {
    name: 'SuperUser',
    value: 'ROLE_SUPERUSER'
  },
  {
    name: 'Admin',
    value: 'ROLE_ADMIN'
  }
];

export const USER_ROLE_TRANSLATE = {
  'ROLE_USER': 'Пользователь',
  'ROLE_SUPERUSER': 'Суперпользователь',
  'ROLE_ADMIN': 'Администратор'
};

export const SORT_TYPE = [
  {
    name: 'Имя',
    value: 'name',
  },
  {
    name: 'Фамилия',
    value: 'lastName',
  },
  {
    name: 'E-mail',
    value: 'email',
  },
  {
    name: 'Роль',
    value: 'role',
  },
  {
    name: 'Организация',
    value: 'organization',
  },
];

export const USERS_PER_PAGE = 4;


export const EMAIL_TEMPLATE = /^[\w\d%$:.-]+@\w+\.\w{2,5}$/;
