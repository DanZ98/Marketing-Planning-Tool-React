import TileCard from "./TileCard";
import TotalInvestedCard from "./TotalInvestedCard";
import {MarketingTile} from "../../types/marketingData";

interface TilesSectionProps {
	tiles: MarketingTile[];
	priorityOpportunities: string[];
}

const TilesSection = ({tiles, priorityOpportunities}: TilesSectionProps) => {
    
	// Split tiles into two rows of 4
	const firstRowTiles = tiles.slice(0, 4);
	const secondRowTiles = tiles.slice(4, 7);

	return (
		<section>
			<div className="tiles">
				<div className="row">
					{firstRowTiles.map((tile) => (
						<TileCard key={tile.id} tile={tile} />
					))}
				</div>
				<div className="row">
					{secondRowTiles.map((tile) => (
						<TileCard key={tile.id} tile={tile} />
					))}
					<TotalInvestedCard
						priorityOpportunities={priorityOpportunities}
					/>
				</div>
			</div>
		</section>
	);
};

export default TilesSection;
