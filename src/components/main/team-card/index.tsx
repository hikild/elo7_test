import React from "react";
import "../index.css";
import ImgOne from "../../../assets/beatriz.png";
import ImgTwo from "../../../assets/camila.png";
import ImgThree from "../../../assets/david.png";
import ImgFour from "../../../assets/guto.png";

const TeamCard = () => {
	const dataObj = [
		{
			id: 0,
			img: ImgOne,
			description: "Foto da Beatriz",
		},
		{
			id: 1,
			img: ImgTwo,
			description: "Foto da Camila",
		},
		{ id: 2, img: ImgThree, description: "Foto do David" },
		{ id: 3, img: ImgFour, description: "Foto do Guto" },
	];

	return (
		<section id='team'>
			<h3 className='t-gray'>Conheça nosso time fora de série</h3>
			<div>
				{dataObj.map((data) => (
					<img src={data.img} alt={data.description} key={data.id} />
				))}
			</div>
		</section>
	);
};

export default TeamCard;
