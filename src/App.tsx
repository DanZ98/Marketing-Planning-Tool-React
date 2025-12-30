import Header from "./components/Header/Header";
import ProjectedSalesSection from "./components/ProjectedSalesSection/ProjectedSalesSection";
import TilesSection from "./components/TilesSection/TilesSection";
import Footer from "./components/FooterSection/FooterSection";
import {mockMarketingData, mockDashboardConfig} from "./data/mockData";

function App() {
	const marketingData = mockMarketingData;
	const currentPage = mockDashboardConfig.currentPage;
	const priorityOpportunities = mockDashboardConfig.priorityOpportunities;

	return (
		<div id="wrapper">
			<Header />
			<main>
				<div id="tile-wrapper" className="container">
					<div className="row">
						<ProjectedSalesSection
							projectedAnnualSales={marketingData.projectedAnnualSales}
							brandAssessment={marketingData.brandAssessment}
							recommendedPlan={marketingData.recommendedPlan}
							currentPage={currentPage}
						/>
					</div>
					<div className="row">
						<TilesSection
							tiles={marketingData.tiles}
							priorityOpportunities={priorityOpportunities}
						/>
					</div>
				</div>
			</main>
			<Footer />
		</div>
	);
}

export default App;
