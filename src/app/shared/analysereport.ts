export interface AnalyzeReport{
    daterange: string;
    businesslocation: string;
}

export const BusinessLocation = ['Bangalore', 'Delhi', 'Hydrabad', 'Lucknow', 'Mumbai'];
export const ReportType = ['All', 'Daily', 'Monthly', 'Yearly'];
export const CategoryType = ['All', 'Electronic', 'Stationary', 'Furniture', 'Dairy'];
export const ProductType = [ 'All', 'MI Mouse', 'Ventilator DX', 'Lab Kit', 'Lenovo', 'Xbox Series S', 'Power A Wired'];
export const AnalyzeType = [ 'Product Wise', 'Category Wise', 'Location Wise', 'Type Wise', 'User Wise'];
