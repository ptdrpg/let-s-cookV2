import React from 'react'
import Paragraphe from '../../text/Paragraphe'
import Facebook from '../../icon/Facebook'
import Instagram from '../../icon/Instagram'
import Tweeter from '../../icon/Tweeter'
import Hearth from '../../icon/Hearth'
import NormalInput from '../../general/input/NormalInput'
import Logo from '../../icon/Logo'
import Linktext from '../../text/Linktext'
import style from './foot.module.css'
import Simplebutton from '../../general/bouton/Simplebutton'

type Props = {}
type items = {
  label: string,
  link: string
}

  const bouton:{name:string}[] = [{
    name: "subscribe"
  }]
  const listOne:items[] = [{
    label: "Home",
    link: "/"}, {
    label: "Recipes",
    link: "/"}, {
    label: "About us",
    link: "/"}, {
    label: "Privacy Policy",
    link: "/"}, {
    label: "Terms of service",
    link: "/"}, {
    label: "sitemap",
    link: "/"}, {
    label: "contact us",
    link: "/"}, {
    label: "Blog",
    link: "/"}, {
    label: "career",
    link: "/"}];
  const listTwoo = [{
    label: "Dinner",
    link: "/"}, {
    label: "Meals",
    link: "/"}, {
    label: "Ingredients",
    link: "/"}, {
    label: "Product vetting",
    link: "/"}, {
    label: "Occasion",
    link: "/"}, {
    label: "Cuisines",
    link: "/"}, {
    label: "Kitchen Tips",
    link: "/"}, {
    label: "News",
    link: "/"}, {
    label: "Feature",
      link: "/"
  }];

const fonctionProvisoir = () => {
    alert('hello')
  }

const Footer = (props: Props) => {
  return (
    <footer className={style.footWrap}>
      <div className={style.footer}>
        <div className={style.firstgrid}>
          <div className={style.socialMedia}>
            <Paragraphe tag="p" className="formTittle" >
              Story Connected :
            </Paragraphe>
            <div className={style.flexicon}>
              <Facebook />
              <Instagram />
              <Hearth />
              <Tweeter />
            </div>
          </div>
          <div className={style.newForm}>
            <Paragraphe tag="p" className="formTittle" >
              Subscribe to our Newsetter
            </Paragraphe>
            <div className={style.footButton}>
              <NormalInput />
              <Simplebutton label='subscribe' evenement={fonctionProvisoir} />
            </div>
          </div>
        </div>
        <div className={style.footerList}>
          <div className='footLink'>
              <ul className={style.flex}>
                {
                  listOne.map((value) => <li>{ <Linktext label={value.label} link={value.link} className={style.color} /> }</li> )
                }
            </ul>
          </div>
          <div className='footLink'>
            <ul className={style.flex}>
                {
                  listTwoo.map((value) => <li>{ <Linktext label={value.label} link={value.link} className={style.color} /> }</li> )
                }
            </ul>
          </div>
        </div>
      </div>
      <div className={style.footerLogo}>
        <Logo />
      </div>
    </footer>
  )
}

export default Footer