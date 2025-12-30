import {MarketingData} from "../types/marketingData";

/**
 * Mock data for the Ace Hardware Marketing Dashboard
 * This simulates data that would typically come from an API
 */
export const mockMarketingData: MarketingData = {
	projectedAnnualSales: 5042900,
	brandAssessment: 13594,
	recommendedPlan: 62828,
	totalInvested: 23999,
	tiles: [
		{
			id: "acerewards",
			title: "Ace Rewards campaigns for Direct Mail, Email, SMS, Mobile App",
			percentage: 12,
			value: 23293,
			logo: "ace_rewards_logo.svg",
			statusIcon: "below_recommended.svg",
		},
		{
			id: "acelocallift",
			title: "Connect with searchers looking for your products & services",
			percentage: 10,
			value: 10333,
			logo: "local_lift_logo.svg",
			statusIcon: "complete_icon.svg",
		},
		{
			id: "soci",
			title: "Social media advertising",
			percentage: 20,
			value: 19999,
			logo: "soci_logo.svg",
			statusIcon: "review_icon.svg",
		},
		{
			id: "acecirculars",
			title: "National Circulars",
			percentage: 25,
			value: 34334,
			logo: "national_circulars_icon.svg",
			statusIcon: "review_icon.svg",
		},
		{
			id: "famousfor4",
			title: "Famous for 4 and Sign Kits",
			percentage: 12,
			value: 10928,
			logo: "famous_four_icon.png",
			statusIcon: "review_icon.svg",
		},
		{
			id: "otherlocal",
			title: "Other Local Marketing",
			percentage: 14,
			value: 30299,
			logo: "radio_tv_icon.svg",
			statusIcon: "review_icon.svg",
		},
		{
			id: "newstore",
			title: "New Store Marketing",
			percentage: 30,
			value: 10283,
			logo: "grand_opening_icon.svg",
			statusIcon: "review_icon.svg",
		},
	],
};

/**
 * Mock additional data for the dashboard
 */
export const mockDashboardConfig = {
	currentPage: 1,
	priorityOpportunities: ["Ace Rewards", "Local Lift", "Soci"],
};
