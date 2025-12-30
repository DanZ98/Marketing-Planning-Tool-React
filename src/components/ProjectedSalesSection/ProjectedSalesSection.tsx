interface ProjectedSalesSectionProps {
	projectedAnnualSales: number;
	brandAssessment: number;
	recommendedPlan: number;
	currentPage: number;
}

const ProjectedSalesSection = ({
	projectedAnnualSales,
	brandAssessment,
	recommendedPlan,
	currentPage,
}: ProjectedSalesSectionProps) => {

	const renderPaginationDots = () => {
		const totalPages = 5;
		const dots = [];

		for (let i = 1; i <= totalPages; i++) {
			dots.push(
				<li
					key={i}
					className={`menu-pagination__li ${
						i <= currentPage ? "active" : ""
					}`}
				/>
			);
		}

		return dots;
	};

	return (
		<section>
			<div className="menu-pagination">
				<ul className="menu-pagination__ul">
					{renderPaginationDots()}
				</ul>
			</div>

			<div className="projected-sales">
				<p className="projected-sales__based">
					Based on projected annual sales of{" "}
					<span className="projected-sales__tiles-amount">
						${projectedAnnualSales.toLocaleString()}
					</span>
				</p>
				<p className="projected-sales__brand-assessment">
					and a brand assessment of{" "}
					<span className="projected-sales__tiles-amount">
						${brandAssessment.toLocaleString()}
					</span>{" "}
					your Ace recommended plan is:{" "}
					<span className="projected-sales__tiles-amount">
						${recommendedPlan.toLocaleString()}
					</span>
				</p>
				<p className="projected-sales__plan-invested">
					This is currently how your plan is being invested:
				</p>
				<p className="projected-sales__marketing-initiative">
					Select an Ace Marketing initiative to adjust totals.
				</p>
			</div>
		</section>
	);
};

export default ProjectedSalesSection;
