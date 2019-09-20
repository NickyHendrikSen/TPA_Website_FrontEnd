import React from "react"
import axios from "axios"
import "./EditProfile.scss"

export default class EditProfile extends React.Component{
    state = {
        profile:{
            UserID:'',
            Username:'',
            Gender:'Male',
            UserLanguage:'',
            UserResponseTime:'',
            UserResponseRate:'',
            UserAbout:'',
            UserThumbnailURL:'',
            preferred_currency:'USD',
        },
        language:[{
            languageName:'',
        }],
        currency:[{
            code: ''
        }],
    }
    // changeLanguage = () =>{
    //     var language = (document.getElementById('pickLanguage') as HTMLSelectElement);
    //     var languageElement = (document.getElementsByClassName('EditProfile_UserLanguage') as HTMLCollectionOf<HTMLElement>);
    //     for(let i = 0; i < languageElement.length; i++){
    //         // console.log(languageElement[i].innerText + " " + language.value);
    //         if(languageElement[i].innerText == language.value){
    //             return true;
    //         }
    //     }
    //     // this.state.profile.UserLanguage+= ", " + language.value; 
    //     this.setState({
    //         profile:{
    //             ...this.state.profile, UserLanguage: this.state.profile.UserLanguage + ", " + language.value,
    //         }
    //     })
    //     console.log(this.state.profile.UserLanguage)
    //     // (document.getElementsByClassName('EditProfile_UserLanguageWrapper')[0] as HTMLElement).innerHTML += '<div class="EditProfile_UserLanguage">' + language.value + '</div>';
    //     // console.log((document.getElementsByClassName('EditProfile_UserLanguageWrapper')[0] as HTMLElement))

    // }
    // removeLanguage = (e : any) => {
    //     var languageElement = (document.getElementsByClassName('EditProfile_UserLanguage') as HTMLCollectionOf<HTMLElement>);
    //     console.log(e);
    //     let a = 0;
    //     let str = "";
    //     let index = 0;
    //     for(let i = 0; i < languageElement.length; i++){
    //         if(languageElement[i].innerText == e){
    //             index = i;
    //         }
    //         else{
    //             if(a == 0){
    //                 str += languageElement[i].innerText;
    //                 a = 1;
    //             }
    //             else{
    //                 str+= ", " + languageElement[i].innerText;
    //             }
    //         }
    //     }
    //     // console.log(str);
    //     this.setState({
    //         profile:{
    //             ...this.state.profile, UserLanguage: str, 
    //         }
    //     })
    //     languageElement[index].remove();
    // }
    languageSet(e : any){
        var langs = (document.getElementsByClassName('EditProfile_chLanguage') as HTMLCollectionOf<HTMLInputElement>);
        var str = "";
        var has = 0;
        for(let i = 0; i < langs.length; i++){
            if(langs[i].value == e){
                if(langs[i].checked == false){
                    // console.log('a');
                }
                else{
                    // console.log('b');
                    this.setState({
                        profile:{
                            ...this.state.profile,
                            UserLanguage: this.state.profile.UserLanguage == "" ? e : this.state.profile.UserLanguage + ", " + e,
                        }
                    })
                    this.showSave();
                    return;
                }
            }
            else if(langs[i].checked == true){
                if(has == 0){
                    str += langs[i].value;
                    has = 1;
                }
                else{
                    str += ", " + langs[i].value;
                }
            }
        }
        this.setState({
            profile:{
                ...this.state.profile,
                UserLanguage: str,
            }
        })
        this.showSave();
    }
    changeCurrency(){
        (document.getElementById('txtCurrency') as HTMLInputElement).value = (document.getElementById('pickCurrency') as HTMLInputElement).value;
        (document.getElementsByClassName('EditProfile_btnSave')[0] as HTMLElement).style.display = "block";
    }
    showSave = () =>{
        (document.getElementsByClassName('EditProfile_btnSave')[0] as HTMLElement).style.display = "block";
    }
    changeAbout = () =>{
        this.setState({
            profile:{
                ...this.state.profile,
                UserAbout: (document.getElementById('txtDescribe') as HTMLTextAreaElement).value + "",
            }
        })
        this.showSave();
    }
    validate = () => {
        var first = document.getElementById('txtFirst') as HTMLInputElement;
        var second = document.getElementById('txtSecond') as HTMLInputElement;
        var gender = document.getElementById('txtGender') as HTMLInputElement;
        //this.state.profile.UserLanguage = ""
        var currency = document.getElementById('pickCurrency') as HTMLSelectElement;
        var responseRate = document.getElementById('txtResRate') as HTMLSelectElement;
        var responseTime = document.getElementById('txtResTime') as HTMLSelectElement;
        var describe = document.getElementById('txtDescribe') as HTMLSelectElement;
        
        if(first.value == ""){
            alert("First name can't be empty");
        }
        else if(!isNaN(parseInt(first.value))){
            alert("First name can only be alphabet");
        }
        else if(!isNaN(parseInt(second.value)) && second.value != ""){
            alert("Second name can only be alphabet");
        }
        else if(gender.value != "Male" && gender.value != "Female" && gender.value != "Other"){
            alert("Gender can only be 'Male' 'Female' 'Other'");
        }
        else if(this.state.profile.UserLanguage == ""){
            alert("Pick atleast 1 language");
        }
        else if(currency.value == ""){
            alert("Pick currency");
        }
        else if(responseRate.value == ""){
            alert("Response rate can't be empty")
        }
        else if(Number(responseRate.value) > 100 || Number(responseRate) < 0){
            alert("Response rate can only between 0 until 100")
        }
        else if(responseTime.value == ""){
            alert("Response time can't be empty")
        }
        else if(describe.value.length <= 20){
            alert("Please describe yourself atleast 20 characters");
        }

        
    }
    componentWillMount(){
        axios.get('http://backendtpaweb.herokuapp.com/api/users/' + localStorage.getItem('UserID'))
            .then(res => {
                this.setState(
                    {
                        profile : res.data
                    }
                )
                // console.log(res.data);
            }
        )
        
        axios.all([
            axios.get('https://api.myjson.com/bins/13i713'),
            axios.get('https://api.myjson.com/bins/ns7n7'),
        ])
            .then(axios.spread((currencyRes:any, langRes:any, exchangeRes:any)=>
            {
                this.setState({
                    currency:currencyRes.data,
                    language:langRes.data,
                })   
            }))
    }
    render(){
        console.log(this.state.profile.UserLanguage);
        return(
            <div className="EditProfile_wrapper">
                <div className="EditProfile_content">
                    <img src={"http://" + this.state.profile.UserThumbnailURL} alt="" className="EditProfile_Image"/>
                    <div className="EditProfile_contentInput">
                        First Name 
                        <input type="text" id="txtFirst" defaultValue={this.state.profile.Username.split(' ', 2)[0]} onChange={this.showSave}/>
                    </div>
                    <div className="EditProfile_contentInput">
                        Second Name 
                        <input type="text" id="txtSecond" defaultValue={this.state.profile.Username.split(' ', 2)[1]} onChange={this.showSave}/>
                    </div>
                    <div className="EditProfile_contentInput">
                        Gender 
                        <input type="text" id="txtGender" defaultValue={this.state.profile.Gender} onChange={this.showSave}/>
                    </div>
                    <div className="EditProfile_contentInput">
                        Spoken Language 
                        <div className="EditProfile_Language">
                            {this.state.language.map(e=>{
                                return(
                                    <div>
                                        <input type="checkbox" name="" id="" checked={this.state.profile.UserLanguage.includes(e.languageName) ? true : false} onChange={() => this.languageSet(e.languageName)} value={e.languageName} className="EditProfile_chLanguage"/><span>{e.languageName}</span>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className="EditProfile_contentInput">
                        Pick Currency
                        <select name="" id="pickCurrency" onChange={this.changeCurrency}>
                            {this.state.currency.map(e=>{
                                return(
                                    <option value={e.code}>{e.code}</option>
                                )
                            })}
                        </select>
                        Preferred Currency 
                        <input type="text" id="txtCurrency" defaultValue={this.state.profile.preferred_currency} disabled/>
                    </div>
                    <div className="EditProfile_contentInput">
                        Response Rate
                        <input type="number" min="0" id="txtResRate" defaultValue={this.state.profile.UserResponseRate} onChange={this.showSave}/>
                    </div>
                    <div className="EditProfile_contentInput">
                        Response Time
                        <input type="text" id="txtResTime" defaultValue={this.state.profile.UserResponseTime} onChange={this.showSave}/>
                    </div>
                    <div className="EditProfile_contentInput">
                        Describe Yourself
                        <textarea name="" id="txtDescribe" cols={30} rows={10} value={this.state.profile.UserAbout} onChange={this.changeAbout}></textarea>
                    </div>
                    <button className="EditProfile_btnSave" onClick={this.validate}>Save</button>
                </div>
            </div>
        )
    }
}