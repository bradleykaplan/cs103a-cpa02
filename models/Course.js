'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;
const Mixed = Schema.Types.Mixed;
const Date = String;//Schema.Types.Date

var courseSchema = Schema( {
    company_id: Mixed,
    company_name: Mixed,
    date_first_certified: Date,//will this work???
    date_certified: Date,
    current_status: String,
    description: String,
    industry: String,
    industry_category: String,
    products_and_services: Mixed,
    country: String,
    state: Mixed,
    city: Mixed,
    sector: Mixed,
    size: Mixed,
    b_corp_profile: String,//will this work????
    website: String,//will this work???
    assessment_year: Number,
    overall_score: Number,
    impact_area_community: Number,
    impact_area_customers: Number,
    impact_area_environment: Number,
    impact_area_governance: Number,
    impact_area_workers: Number,
    impact_area_community_na_score: Number,
    impact_area_customers_na_score: Number,
    impact_area_environment_na_score: Number,
    impact_area_governance_na_score: Number,
    impact_area_workers_na_score: Number,
    ia_community_it_civic_engagement_giving: Number,
    ia_community_it_designed_for_charitable_giving: Number,
    ia_community_it_designed_to_give: Number,
    ia_community_it_diversity_equity_inclusion: Number,
    ia_community_it_diversity_inclusion: Number,
    ia_community_it_economic_impact: Number,
    ia_community_it_job_creation: Number,
    ia_community_it_local_economic_development: Number,
    ia_community_it_local_involvement: Number,
    ia_community_it_microdistribution_poverty_alleviation: Number,
    ia_community_it_microfranchise_poverty_alleviation: Number,
    ia_community_it_national_economic_development: Number,
    ia_community_it_producer_cooperative: Number,
    ia_community_it_suppliers_distributors: Number,
    ia_community_it_suppliers_distributors_product: Number,
    ia_community_it_supply_chain_management: Number,
    ia_community_it_supply_chain_poverty_alleviation: Number,
    ia_customers_it_arts_media_culture: Number,
    ia_customers_it_basic_services_for_the_underserved: Number,
    ia_customers_it_business_model_and_engagement: Number,
    ia_customers_it_capacity_building: Number,
    ia_customers_it_current_fund: Number,
    ia_customers_it_customer_stewardship: Number,
    ia_customers_it_economic_empowerment_for_the_underserved: Number,
    ia_customers_it_education: Number,
    ia_customers_it_educational_models_and_engagement: Number,
    ia_customers_it_educational_outcomes: Number,
    ia_customers_it_fund_governance: Number,
    ia_customers_it_health: Number,
    ia_customers_it_health_wellness_improvement: Number,
    ia_customers_it_impact_improvement: Number,
    ia_customers_it_improved_impact: Number,
    ia_customers_it_infrastructure_market_access: Number,
    ia_customers_it_infrastructure_market_access_building: Number,
    ia_customers_it_investment_criteria: Number,
    ia_customers_it_leadership_outreach: Number,
    ia_customers_it_marketing_recruiting_and_transparency: Number,
    ia_customers_it_mission_aligned_exit: Number,
    ia_customers_it_mission_lock: Number,
    ia_customers_it_past_performance: Number,
    ia_customers_it_portfolio_management: Number,
    ia_customers_it_portfolio_reporting: Number,
    ia_customers_it_positive_impact: Number,
    ia_customers_it_privacy_and_consumer_protection: Number,
    ia_customers_it_quality_and_continuous_improvement: Number,
    ia_customers_it_serving_in_need_populations: Number,
    ia_customers_it_serving_underserved_populations_direct_: Number,
    ia_customers_it_student_experience: Number,
    ia_customers_it_student_outcomes: Number,
    ia_customers_it_student_outcomes_special_interest_students_: Number,
    ia_customers_it_student_outcomes_traditional_students_: Number,
    ia_customers_it_support_for_underserved_purpose_driven_enterprises: Number,
    ia_customers_it_targeted_for_investment: Number,
    ia_environment_it_air_climate: Number,
    ia_environment_it_certification: Number,
    ia_environment_it_community: Number,
    ia_environment_it_construction_practices: Number,
    ia_environment_it_designed_to_conserve_agriculture_process: Number,
    ia_environment_it_designed_to_conserve_manufacturing_process: Number,
    ia_environment_it_designed_to_conserve_wholesale_process: Number,
    ia_environment_it_energy_water_efficiency: Number,
    ia_environment_it_environment_products_services_introduction: Number,
    ia_environment_it_environmental_education_information: Number,
    ia_environment_it_environmental_management: Number,
    ia_environment_it_environmentally_innovative_agricultural_process: Number,
    ia_environment_it_environmentally_innovative_manufacturing_process: Number,
    ia_environment_it_environmentally_innovative_wholesale_process: Number,
    ia_environment_it_green_investing: Number,
    ia_environment_it_green_lending: Number,
    ia_environment_it_inputs: Number,
    ia_environment_it_land_life: Number,
    ia_environment_it_land_office_plant: Number,
    ia_environment_it_land_wildlife_conservation: Number,
    ia_environment_it_material_energy_use: Number,
    ia_environment_it_materials_codes: Number,
    ia_environment_it_outputs: Number,
    ia_environment_it_renewable_or_cleaner_burning_energy: Number,
    ia_environment_it_resource_conservation: Number,
    ia_environment_it_safety: Number,
    ia_environment_it_toxin_reduction_remediation: Number,
    ia_environment_it_training_collaboration: Number,
    ia_environment_it_transportation_distribution_suppliers: Number,
    ia_environment_it_water: Number,
    ia_workers_it_benefits: Number,
    ia_workers_it_career_development: Number,
    ia_workers_it_compensation_wages: Number,
    ia_workers_it_engagement_satisfaction: Number,
    ia_workers_it_financial_security: Number,
    ia_workers_it_health_wellness_safety: Number,
    ia_workers_it_human_rights_labor_policy: Number,
    ia_workers_it_job_flexibility_corporate_culture: Number,
    ia_workers_it_management_worker_communication: Number,
    ia_workers_it_occupational_health_safety: Number,
    ia_workers_it_training_education: Number,
    ia_workers_it_worker_benefits: Number,
    ia_workers_it_worker_owned: Number,
    ia_workers_it_worker_ownership: Number,
    ia_workers_it_workforce_development: Number,
    certification_cycle: Number,
} );

module.exports = mongoose.model( 'Course', courseSchema );
