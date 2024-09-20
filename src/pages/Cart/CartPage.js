// CartPage.jsx
import React from 'react';
import './CartPage.css'; // افترض أن CSS موجود هنا
import { FaTrash, FaCreditCard, FaTrashAlt } from 'react-icons/fa'; // استيراد أيقونات الحذف والدفع
import img1 from '../../images/products/clothes-1.jpg';
import img2 from '../../images/abaya/jacket-1.jpg';
import img3 from '../../images/products/shampoo.jpg';
import NavBar from '../../components/Uitilty/NavBarLogin/NavBar';
import Footer from '../../components/Uitilty/Footer/Footer';

const CartPage = () => {
  return (
    <>
      <NavBar />
      <section className="cart-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8"col-12 >
              <div className="cart-table">
                <h3>سلة التسوق</h3>
                <div className="cart-table-warp">
                  <table>
                    <thead>
                      <tr>
                        <th className="product-th text-end">المنتج</th>
                        <th className="quy-th">الكمية</th>
                        <th className="color-th">اللون</th>
                        <th className="total-th">السعر</th>
                        <th className="remove-th">إزالة</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="product-col">
                          <img className='ms-3' src={img1} alt="فستان بطبعة حيوانية" />
                          <div className="pc-title">
                            <h4>فستان بطبعة حيوانية</h4>
                            <p>$45.90</p>
                          </div>
                        </td>
                        <td className="quy-col">
                          <div className="quantity">
                            <div className="pro-qty">
                              <input type="text" value="1" readOnly />
                            </div>
                          </div>
                        </td>
                        <td className="color-col">
                          <span className="color-option" style={{ backgroundColor: '#FF5733' }}></span>
                          <span className="color-option" style={{ backgroundColor: '#33C1FF' }}></span>
                        </td>
                        <td className="total-col">
                          <h4>$45.90</h4>
                        </td>
                        <td className="remove-col">
                          <FaTrash className="remove-icon" />
                        </td>
                      </tr>
                      <tr>
                        <td className="product-col">
                          <img className='ms-3' src={img2} alt="توب وردي مزخرف" />
                          <div className="pc-title">
                            <h4>توب وردي مزخرف</h4>
                            <p>$45.90</p>
                          </div>
                        </td>
                        <td className="quy-col">
                          <div className="quantity">
                            <div className="pro-qty">
                              <input type="text" value="1" readOnly />
                            </div>
                          </div>
                        </td>
                        <td className="color-col">
                          <span className="color-option" style={{ backgroundColor: '#FFC0CB' }}></span>
                          <span className="color-option" style={{ backgroundColor: '#FF69B4' }}></span>
                        </td>
                        <td className="total-col">
                          <h4>$45.90</h4>
                        </td>
                        <td className="remove-col">
                          <FaTrash className="remove-icon" />
                        </td>
                      </tr>
                      <tr>
                        <td className="product-col">
                          <img className='ms-3' src={img3} alt="جينز ضيق" />
                          <div className="pc-title ">
                            <h4>جينز ضيق</h4>
                            <p>$45.90</p>
                          </div>
                        </td>
                        <td className="quy-col">
                          <div className="quantity">
                            <div className="pro-qty">
                              <input type="text" value="1" readOnly />
                            </div>
                          </div>
                        </td>
                        <td className="color-col">
                          <span className="color-option" style={{ backgroundColor: '#000000' }}></span>
                          <span className="color-option" style={{ backgroundColor: '#808080' }}></span>
                        </td>
                        <td className="total-col">
                          <h4>$45.90</h4>
                        </td>
                        <td className="remove-col">
                          <FaTrash className="remove-icon" />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="total-cost">
                  <h6>الإجمالي <span>$99.90</span></h6>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-12 card-right">
              <form className="promo-code-form">
                <input type="text" placeholder="أدخل كود الخصم" />
                <button type="button">تطبيق</button>
              </form>
              <button className="site-btn checkout-btn">
                <FaCreditCard className="btn-icon" />
                الانتقال إلى الدفع
              </button>
              <button className="site-btn sb-dark empty-cart-btn">
                <FaTrashAlt className="btn-icon" />
                تفريغ السلة
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default CartPage;
