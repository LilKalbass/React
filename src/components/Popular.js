import React from "react";
import {fetchPopularRepos} from "../utils/api";
// import {Link} from "react-router-dom";

export default class Popular extends React.Component {
    constructor() {
        super();
        this.state = {
            selectedLanguage: "All",
            repos: null
        }
    }

    componentDidMount() {
        fetchPopularRepos(this.state.selectedLanguage)
            .then(data => this.setState({repos:data}));
    }

    selectLang = (language) => {
        this.setState({selectedLanguage: language});
    }

    render() {
        console.log("Selected language: ", this.state.selectedLanguage)
        const languages = ["All", "Javascript", "Java", "Ruby", "Css", "Python", "C#"]
        return(
            <>
                <ul className = "languages-list">
                    {languages.map((language, index ) => (
                        <li
                            className = "languages-list-item"
                            key = {index}
                            style = {this.state.selectedLanguage === language
                                ? {color: "rgb(255, 165, 0)"}
                                :null
                            }
                            onClick = {() => this.selectLang(language)}>
                            {language}
                        </li>
                    ))}
                </ul>
                <ul className = "popular-list">
                    {this.state.repos?.map((repo, index) => (
                        <li key = {repo.id} className = "popular-item">
                            <div className = "popular-rank">№{index + 1}</div>
                            <ul className = "space-list-items">
                                <li>
                                    <img className = "avatar" src = {repo.owner.avatar_url} alt = "avatar"/>
                                </li>
                                <li>
                                    <a href = {repo.html_url}>{repo.name}</a>
                                </li>
                                <li>@{repo.owner.login}</li>
                                <li>{repo.stargazers_count}</li>
                            </ul>
                        </li>
                    ))}
                </ul>
            </>
        )
    }
}
// const Popular = () => {
//     return <div></div>
// }
// export default Popular;
