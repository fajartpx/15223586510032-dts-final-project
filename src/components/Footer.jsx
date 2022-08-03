import React from "react";
import '../style/footer.css'
import thum from '../images/thum.png'


const Footer =()=>{

    return(
        <>
      
        <footer class="footer-distributed">
			<div class="footer-left">
				<h3>Groo<span>ceries</span></h3>
                <h4>Muhammad Fajar Teguh Putra<span> 15223586510032</span></h4>
			</div>

			<div class="footer-center">

				<div>
					<i class="fa fa-map-marker"></i>
					<p><span>Indonesia</span> Pekanbaru</p>
				</div>

				<div>
					<i class="fa fa-phone"></i>
					<p>+62850 0000 0000</p>
				</div>

				<div>
					<i class="fa fa-envelope"></i>
					<p><a href="mailto:support@company.com">support@company.com</a></p>
				</div>

			</div>
			<div class="footer-right">
				<p class="footer-company-about">
					<span>About the company</span>
					Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
				</p>
			</div>

		</footer>
        </>
 
        
    )
}
export default Footer;