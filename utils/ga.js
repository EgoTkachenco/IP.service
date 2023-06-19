export const GA_TRACKING_ID = 'G-QJRZWNMN14'
export const GTM_TRACKING_ID = 'GTM-5V7BD43'

export const onProductShow = () => {
  dataLayer.push({ ecommerce: null })
  dataLayer.push({
    event: 'view_item',
    ecommerce: {
      items: [
        {
          item_name: 'Prising',
        },
      ],
    },
  })
}

export const onCheckoutStart = (items) => {
  dataLayer.push({ ecommerce: null }) // Clear the previous ecommerce object.
  dataLayer.push({
    event: 'begin_checkout',
    ecommerce: {
      items: items,
    },
  })
}

export const onPurchase = (ecommerce) => {
  dataLayer.push({ ecommerce: null }) // Clear the previous ecommerce object.
  dataLayer.push({
    event: 'purchase',
    ecommerce: ecommerce,
  })
}
