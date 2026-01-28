import { Filter } from "./filter";

export const AllCategories = () => {
    const categories = ['Все категории', 
        'Стеновые и фасадные материалы', 
        'Кровля и водосточная система', 
        'Цемент и сыпучие материалы', 
        'Пиломатериалы и отделка деревом', 
        'Электрика', 
        'Канализация и водоотведение', 
        'Поликарбонат', 
        'Краски', 
        'Пена монтажная, жидкие гвозди', 
        'Сантехника', 'Кирпич', 
        'Погонажные изделия'];
    
    return (
        <div className="d-flex justify-content-center flex-wrap gap-2 mb-5">
            {categories.map((category, index) => 
                <Filter category={category} key={index}/>
            )}
        </div>
    );
};