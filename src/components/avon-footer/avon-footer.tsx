import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'avon-footer',
  styleUrl: 'avon-footer.scss',
  shadow: true,
})
export class AvonFooter {
  @Prop() isDark = false;
  render() {
    console.log('this.isDark', this.isDark)
    return <footer class={`site-footer ${this.isDark ? 'dark' : ''}`}>
      <div class="container">
        <div class="row">
          <div class="col">
            <h4>About AVON</h4>
            <ul class="footer-links">
              <li><a href="#">ABOUT US</a></li>
              <li><a href="#">WATCH Me Now</a></li>
            </ul>
          </div>
          <div class="col">
            <h4>Shopping</h4>
            <ul class="footer-links">
              <li><a href="#">Returns Guarantee</a></li>
              <li><a href="#">Delivery Information</a></li>
              <li><a href="#">Voucher</a></li>
            </ul>
          </div>
          <div class="col">
            <h4>Quick Links</h4>
            <ul class="footer-links">
              <li><a href="#">Contribute</a></li>
              <li class="social-icons">
                <a class="facebook" href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" viewBox="0 0 96.124 96.123" fill="#737373">
                    <path d="M72.089,0.02L59.624,0C45.62,0,36.57,9.285,36.57,23.656v10.907H24.037c-1.083,0-1.96,0.878-1.96,1.961v15.803c0,1.083,0.878,1.96,1.96,1.96h12.533v39.876c0,1.083,0.877,1.96,1.96,1.96h16.352c1.083,0,1.96-0.878,1.96-1.96V54.287h14.654c1.083,0,1.96-0.877,1.96-1.96l0.006-15.803c0-0.52-0.207-1.018-0.574-1.386c-0.367-0.368-0.867-0.575-1.387-0.575H56.842v-9.246c0-4.444,1.059-6.7,6.848-6.7l8.397-0.003c1.082,0,1.959-0.878,1.959-1.96V1.98C74.046,0.899,73.17,0.022,72.089,0.02z"/>
                  </svg>
                </a>
              </li>
              <li>
                <a class="twitter" href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" viewBox="0 0 24 24" fill="#737373">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr/>
      </div>
      <div class="container">
        <div class="footer-row">
          <div class="footer-col">
            <p>Copyright &copy; {new Date().getFullYear()} All Rights Reserved</p>
          </div>
          <div class="footer-col">
            <p>Help</p>
          </div>
          <div class="footer-col">
            <p>TERMS and Conditions</p>
          </div>
        </div>
      </div>
    </footer>;
  }
}
