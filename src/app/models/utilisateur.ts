export class Utilisateur {
    id!: number;
    username!: String;
    password!: String;
    passwordConfirmation!: String;
    passwordAncien!: String;
    nom!: String;
    prenom!: String;
    email!: String;
    dateExpirationCpte!: String;
    dateExpirationMdp!: String;
    renouvelerMdp!: Boolean;
    fonction!: String;
    telephone!: String;
    enabled!: Boolean;
    accountExpired!: Boolean;
    accountLocked!: Boolean;
    passwordExpired!: Boolean;
    authorities!: String;
    credentialsNonExpired!: Boolean;
    accountNonExpired!: Boolean;
    accountNonLocked!: Boolean;
}