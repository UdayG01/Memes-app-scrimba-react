import React from "react"
import troll_face from "../assets/Troll Face.png"

export default function Header(){
	return(
		<header className="header">
			<img src={troll_face} alt="Troll_Face"/>
			<h1>Meme Generator</h1>
			<h3>React Course - Project 3</h3>
		</header>
		)
}