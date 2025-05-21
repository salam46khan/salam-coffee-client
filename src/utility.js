import useIdentity from "./hooks/useIdentity"

const [identity] = useIdentity()

export const isAdmin = identity[0]?.role === 'admin';