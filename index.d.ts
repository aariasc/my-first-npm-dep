export interface User {
  /**
   * firstName: nombre de la persona
   */
  firstName: string;

  /**
   * lastName: apellido de la persona
   */
  lastName: string;

  /**
   * age: edad de la persona. Numerico sin decimales
   */
  age: number;

  /**
   * email: correo electronico
   */
  email: string;

  /**
   * favoriteColor: nombre del color favorito
   */
  favoriteColor: string;

  /**
   * foobar: campo magico (opcional)
   */
  foobar?: string;

  /**
   * blahblah: numero magico
   */
  blahblah: number;
}

export interface Libro {
  author: string;
  title: string;
  pub: number;
}
