import React, { Component } from 'react'
import "./FooterButton.scss"
import "../FooterContents/FooterContents.scss"

export default class FooterButton extends Component {
    
    showFooter(){
        let footer = document.getElementsByClassName("footer-wrapper") as HTMLCollectionOf<HTMLElement>; 
        let closeIcon = document.getElementsByClassName("footer-button-close") as HTMLCollectionOf<HTMLElement>;
        let openIcon = document.getElementsByClassName("footer-button-open") as HTMLCollectionOf<HTMLElement>;
        footer[0].style.display = "flex";
        closeIcon[0].style.display = "block";
        openIcon[0].style.display = "none";
    }

    hideFooter(){
        let footer = document.getElementsByClassName("footer-wrapper") as HTMLCollectionOf<HTMLElement>; 
        let closeIcon = document.getElementsByClassName("footer-button-close") as HTMLCollectionOf<HTMLElement>;
        let openIcon = document.getElementsByClassName("footer-button-open") as HTMLCollectionOf<HTMLElement>;
        footer[0].style.display = "none";
        closeIcon[0].style.display = "none";
        openIcon[0].style.display = "block";
    }

    render() {
        return (
            <div>
                <button className="footer-button-close" onClick={this.hideFooter} >
                    <span className="x-sign">X  </span>
                    Tutup
                </button>
                <button className="footer-button-open" onClick={this.showFooter}>
                    Ketentuan, Privasi, Mata Uang & Lainnnya
                </button>
            </div>
        )
    }
}

