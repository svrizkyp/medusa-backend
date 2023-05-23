export default async function () {
  const imports = (await import(
    "@medusajs/medusa/dist/api/routes/store/carts/index"
  )) as any
  imports.allowedStoreCartsLineItemsFields = [
    ...imports.allowedStoreCartsLineItemsFields,
    "note",
  ]
  imports.defaultStoreCartsLineItemsFields = [
    ...imports.defaultStoreCartsLineItemsFields,
    "note",
  ]
}