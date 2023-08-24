export const generateBitacora = (user:any, descripcion:string) => {
  const bitacora = {
    CodigoRegistro: 0,
    Usuario: user || '',
    FechaHora: new Date(),
    Descripcion: descripcion,
    id: ''
  }
  return bitacora
}