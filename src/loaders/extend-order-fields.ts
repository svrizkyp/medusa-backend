export default async function () {
  const imports = (await import(
    "@medusajs/medusa/dist/api/routes/store/orders/index"
  )) as any
  imports.allowedStoreOrdersFields = [
    ...imports.allowedStoreOrdersFields,
    "ecommerce_type_id",
    "payment_term",
    "themes_id",
    "custom_feature",
  ]
  imports.defaultStoreOrdersFields = [
    ...imports.defaultStoreOrdersFields,
    "ecommerce_type_id",
    "payment_term",
    "themes_id",
    "custom_feature",
  ]
}