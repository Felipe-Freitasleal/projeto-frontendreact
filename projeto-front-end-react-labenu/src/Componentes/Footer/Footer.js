import React from "react";
import { Div } from "./styledFooter"
import logoGit from "../../assets/github.png"
import logoLikedin from "../../assets/linkedin.png"
import logoInstagram from "../../assets/instagram.png"

function Footer () {

    return (
        <Div>
            <span>
                Criado por Felipe Leal
            </span>
            <span>
                <a href="https://github.com/Felipe-Freitasleal"><img src={logoGit} alt="logo github"/></a>
                <a href="https://www.linkedin.com/in/felipe-leal-675a67234/"><img src={logoLikedin} alt="logo likedin"/> </a>
                <a href="https://www.instagram.com/kali_grafia/"><img src={logoInstagram} alt="logo instagram"/> </a>
            </span>
        </Div>
    )
}

export default Footer