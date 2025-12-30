import {MarketingTile} from "../../types/marketingData";

interface TileCardProps {
	tile: MarketingTile;
}

const TileCard = ({tile}: TileCardProps) => {
	const getImageDimensions = (logoName: string) => {
		if (logoName.includes("famous_four")) {
			return {height: 84, width: 84};
		}
		if (logoName.includes("radio_tv")) {
			return {height: "auto" as const, width: 129};
		}
		if (logoName.includes("grand_opening")) {
			return {height: "auto" as const, width: 100};
		}
		return {height: 62, width: 155};
	};

	const imageDimensions = getImageDimensions(tile.logo);

	return (
		<div className="col-md-3 col-card">
			<div className="card tiles__card">
				<img
					className="tiles__status"
					src={`/${tile.statusIcon}`}
					alt="Investment status"
					height="60"
					width="60"
				/>
				<div className="card-img-container">
					<img
						className="tiles__img"
						src={`/${tile.logo}`}
						alt={tile.title}
						height={imageDimensions.height}
						width={imageDimensions.width}
					/>
				</div>
				<div className="card-body">
					<h5 className="card-title tiles__targeted">{tile.title}</h5>
					<p className="tiles__percentage">{tile.percentage}%</p>
					<p className="tiles__rewards-value">
						${tile.value.toLocaleString()}
					</p>
				</div>
			</div>
		</div>
	);
};

export default TileCard;
