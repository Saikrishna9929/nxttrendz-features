// Write your code here
import './index.css'

const CartSummary = props => {
  const {totalPrice, itemsInCart} = props
  return (
    <div className="order-details-container">
      <div className="order-total-container">
        <h1 className="order-total-price">
          Order Total: <span className="total-price">Rs {totalPrice}/-</span>
        </h1>
        <p className="cart-length">
          {itemsInCart}
          {itemsInCart === 1 ? ' Item' : ' Items'} in cart
        </p>
      </div>
      <button className="order-cart-button" type="button">
        Checkout
      </button>
    </div>
  )
}

export default CartSummary
