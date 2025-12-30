export interface MarketingTile {
	id: string;
	title: string;
	percentage: number;
	value: number;
	logo: string;
	statusIcon: string;
}

export interface MarketingData {
	projectedAnnualSales: number;
	brandAssessment: number;
	recommendedPlan: number;
	totalInvested: number;
	tiles: MarketingTile[];
}
