export { Filter } from './ui/filter';
export { AllCategories } from './ui/All-categories';

export { setCategory, resetCategory } from './model/category-filter-slice';
export { selectSelectedCategory } from './lib/selectors';

export { setCategory as filterCategory } from './model/category-filter-slice';
export { selectSelectedCategory as getSelectedCategory } from './lib/selectors';