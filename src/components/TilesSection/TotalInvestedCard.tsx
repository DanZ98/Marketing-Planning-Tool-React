interface TotalInvestedCardProps {
	priorityOpportunities: string[];
}

const TotalInvestedCard = ({priorityOpportunities}: TotalInvestedCardProps) => {
	
	// Hardcoded values for static app
	const totalInvested = 23999;
	const remainingToInvest = 62828;

	return (
		<div className="col-md-3 col-card">
			<div className="tiles__card tiles__card--invested">
				<div className="tiles__card-main tiles__card-main--invest">
					<p className="tiles__invested-label">Total invested:</p>
					<p className="tiles__invested-value">
						${totalInvested.toLocaleString()}
					</p>
					<p className="tiles__remain-label">Remaining to invest:</p>
					<p className="tiles__remain-value">
						${remainingToInvest.toLocaleString()}
					</p>
				</div>
				<div className="tiles__footer">
					<p className="tiles__additional-opp">
						Priority opportunities
					</p>
					<div className="tiles__ul-container">
						<ul className="tiles__addtional-ul">
							{priorityOpportunities.map((opportunity, index) => (
								<li
									key={index}
									className="tiles__additional-li"
								>
									{opportunity}
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TotalInvestedCard;
