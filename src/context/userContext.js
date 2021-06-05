import React from "react";

const UserContext = React.createContext("Software Developer");
//  sadece provider kullanilmadigi zaman default value kullanilir

const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

export { UserProvider, UserConsumer };
export default UserContext;
