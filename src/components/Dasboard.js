import React,{useState} from 'react'
import classes from './Dasboard.module.css'
import { Link} from "react-router-dom";

export default function Dasbord() {

    const [HomeIsSelected, setHomeIsSelected] = useState(false)
    const [TeamIsSelected, setTeamIsSelected] = useState(false)
    const [walletIsSelected, setWallet] = useState(false)
    const [packages, setpackages] = useState(false)
    const [mail, setMail] = useState(false)
    const [nav, setNav] = useState(true)

    const [widthDraw, setWidthDraw] = useState(false)


    let HomeClasses = HomeIsSelected ? `${classes.inside}` : `${classes.inside} ${classes.none}`
    let TeamClasses = TeamIsSelected ? `${classes.inside}` : `${classes.inside} ${classes.none}` 
    let walletClasses = walletIsSelected ? `${classes.inside}` : `${classes.inside} ${classes.none}` 
    let packagesClasses = packages  ? `${classes.inside}` : `${classes.inside} ${classes.none}` 
    let mailClasses = mail ? `${classes.inside}` : `${classes.inside} ${classes.none}` 
    let widthDrawClasses = widthDraw ? `${classes.inside}` : `${classes.inside} ${classes.none}` 
    
    let navClasses = nav ? `${classes.sidenav}` : `${classes.sidenav} ${classes.leftSlide}`
    let hambuggerClasses = nav ? `${classes.hamburger} ${classes.sipe}` : `${classes.hamburger}`
    

    return (
        <>


       <div className={hambuggerClasses} onClick={()=>setNav(prv=>!prv)}>
       <i class="fas fa-bars"></i>
       </div>

       <div className={classes.sidebarRes}>
           <h3>V . .</h3>
           <div>
           <img className={`${classes.pic} ${classes.navpic}`} src='http://localhost:3000/ivan.jpg'/>

           </div >

          <p>Arunmani</p>

           <ul className={classes.okul}>
               <div className={classes.fdiv}>
               <i class="fas fa-cog"></i>
              <i className="fab fa-twitter"></i>
              <i className="fas fa-power-off"></i>
              </div>
              <i className="fa fa-home"></i>
              <i className="fa fa-users"></i>
              <i class="far fa-star"></i>
              <i class="far fa-star"></i>
              <i class="fas fa-user-friends"></i>
              <i class="fas fa-wallet"></i>
              <i class="fas fa-box"></i>
              <i class="fas fa-envelope"></i>
              <i class="fab fa-google-wallet"></i>
              <i class="fas fa-sign-out-alt"></i>
           </ul>
       </div>

       
        <div className={navClasses}>
          <h2 className={classes.logoName}>VRTRON 500</h2>
          <div className={classes.navDivHold}>
              
                  <img className={classes.pic} src='http://localhost:3000/ivan.jpg'/>
             
              <p>Arunmani</p>
              <div className={classes.Iholder}>
              <i class="fas fa-cog"></i>
              <i className="fab fa-twitter"></i>
              <i className="fas fa-power-off"></i>
              </div>
          </div>



            <ul className={classes.sidenaul}>
                 <li onClick={()=>setHomeIsSelected(prv=>!prv)}>
                      <a  href="#">
                          <i className="fa fa-home"></i>
                          <span>Home</span>
                          <span className={classes.plus}>{HomeIsSelected ? <i class="fas fa-chevron-up"></i> : <i class="fas fa-chevron-down"></i>}</span>
                          <ul className={HomeClasses}>
                          <li><Link to="/"><i class="fas fa-chevron-right"></i> Dasboard</Link></li>
                          <li><Link to="/"><i class="fas fa-chevron-right"></i> Profile</Link></li>
                          <li><Link to="/"><i class="fas fa-chevron-right"></i> Update Tron Address</Link></li>
                          <li><Link to="/"><i class="fas fa-chevron-right"></i> Change Password</Link></li>
                      </ul>
                      </a>
                </li>


                <li onClick={()=>setTeamIsSelected(prv=>!prv)}>
                      <a href= "#">
                          <i className="fa fa-users"></i>
                          <span>Team</span>
                          <span className={classes.plus}>{TeamIsSelected ? <i class="fas fa-chevron-up"></i> : <i class="fas fa-chevron-down"></i>}</span>
                          <ul className={TeamClasses}>
                          <li><a href="certificate.asp"><i class="fas fa-chevron-right"></i> packages View</a></li>
                          <li><Link to="/Direct"><i class="fas fa-chevron-right"></i> Direct Referals</Link></li>
                          </ul>
                      </a>
                </li>

                <li>
                      <a  href="usershome.asp">
                      <i class="far fa-star"></i>
                          <span>Download PDF</span>
                      </a>
                </li>
                <li>
                      <a href= "#">
                      <i class="far fa-star"></i>
                          <span>Binary Details</span>

                      </a>
                </li>

                <li>
                      <a href= "#">
                      <i class="fas fa-user-friends"></i>
                          <span>Referal Links</span>

                      </a>
                </li>

                <li onClick={()=>setWallet(prv=>!prv)}>
                      <a href= "#">
                         <i class="fas fa-wallet"></i>
                          <span>Wallet</span>
                          <span className={classes.plus}>{walletIsSelected ? <i class="fas fa-chevron-up"></i> : <i class="fas fa-chevron-down"></i>}</span>
                          <ul className={walletClasses}>
                          <li><a href="#"><i class="fas fa-chevron-right"></i> Add Funds</a></li>
                          <li><a href="#"><i class="fas fa-chevron-right"></i> Pending Deposits</a></li>
                          <li><a href="#"><i class="fas fa-chevron-right"></i> Transfer</a></li>
                          <li><a href="#"><i class="fas fa-chevron-right"></i> Wallet  Change</a></li>
                          <li><a href="#"><i class="fas fa-chevron-right"></i> Activation Wallet</a></li>
                          <li><a href="#"><i class="fas fa-chevron-right"></i> Cash Wallet</a></li>
                          </ul>
                      </a>
                </li>
                <li  onClick={()=>setpackages(prv=>!prv)}>
                      <a  href="#">
                      <i class="fas fa-box"></i>
                          <span>packagess</span>
                          <span className={classes.plus}>{packages ? <i class="fas fa-chevron-up"></i> : <i class="fas fa-chevron-down"></i>}</span>
                          <ul className={packagesClasses}>
                          <li><a href="editprofilemember.asp"><i class="fas fa-chevron-right"></i> Top Up</a></li>
                          <li><a href="editprofilemember.asp"><i class="fas fa-chevron-right"></i> My  Topups</a></li>
                          </ul>
                      </a>
                </li>
                <li onClick={()=>setMail(prv=>!prv)}>
                      <a  href="#">
                      <i class="fas fa-envelope"></i>
                          <span>Mail Box</span>
                          <span className={classes.plus}>{mail ? <i class="fas fa-chevron-up"></i> : <i class="fas fa-chevron-down"></i>}</span>
                          <ul className={mailClasses}>
                          <li><a href="editprofilemember.asp"><i class="fas fa-chevron-right"></i> Compose</a></li>
                          <li><a href="editprofilemember.asp"><i class="fas fa-chevron-right"></i> Send Items</a></li>
                          <li><a href="editprofilemember.asp"><i class="fas fa-chevron-right"></i> Inbox</a></li>

                          </ul>
                      </a>
                </li>
              
                <li onClick={()=>setWidthDraw(prv=>!prv)}>
                      <a  href="#">
                      <i class="fab fa-google-wallet"></i>
                          <span>Width Draw</span>
                          <span className={classes.plus}>{widthDraw ? <i class="fas fa-chevron-up"></i>: <i class="fas fa-chevron-down"></i>}</span>
                          <ul className={widthDrawClasses}>
                          <li><a href="editprofilemember.asp"><i class="fas fa-chevron-right"></i> widthdraw</a></li>
                          <li><a href="editprofilemember.asp"><i class="fas fa-chevron-right"></i> widthdraw Report</a></li>
                          </ul>
                      </a>
                </li>

                <li>
                      <a  href="usershome.asp">
                      <i class="fas fa-sign-out-alt"></i>
                          <span>Log Out</span>
                      </a>
                </li>
            </ul>
        </div>

        </>
    )
}
