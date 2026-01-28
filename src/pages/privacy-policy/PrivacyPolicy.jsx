import { FeedbackForm } from "../../features/feedback-form";
import styles from './PrivacyPolicy.module.scss';

const PrivacyPolicy = () => {
    return(
        <div className={`container ${styles.privacyContainer}`}>
            <section className={`card shadow-lg border-0 mb-5 ${styles.privacyCard}`}>
                <div className="card-body p-4 p-lg-5">
                    <h1 className={`display-5 fw-bold mb-4 text-center ${styles.privacyHeading}`}>
                        Политика конфиденциальности
                    </h1>
                    
                    <div className="lead mb-4">
                        <p className="mb-3">
                            Настоящая Политика конфиденциальности регулирует порядок обработки и
                            использования персональных данных физических лиц, пользующихся сервисами Сайта.
                        </p>
                        <p className="mb-3">
                            Передавая Оператору персональные данные посредством использования Сайта и
                            регистрации на Сайте, Пользователь дает свое согласие (добровольное и бессрочное) на
                            использование персональных данных на условиях, изложенных в настоящей Политике
                            конфиденциальности. Данное согласие является сознательным. Пользователь дает согласие
                            на обработку персональных данных свободно, своей волей и в своем интересе. Согласие не
                            является письменным, так как Оператор не обрабатывает специальные и биометрические
                            персональные данные. Согласие дается в соответствии с п. 1 ст. 9 Федерального закона от
                            27.07.2006 N 152-ФЗ (ред. от 22.02.2017) "О персональных данных".
                        </p>
                        <p className="alert alert-warning mb-3">
                            Если Пользователь не согласен с условиями настоящей Политики конфиденциальности,
                            он обязан прекратить использование Сайта.
                        </p>
                        <p className="mb-3">
                            Безусловным акцептом настоящей Политики конфиденциальности является начало
                            использования Сайта Пользователем.
                        </p>
                        <p className="alert alert-info mb-4">
                            Оператор может обновлять Политику по мере необходимости. Рекомендуем
                            Пользователям периодически проверять актуальность данной Политики. Продолжая
                            пользоваться Сайтом после изменения Политики, Вы подтверждаете согласие с внесенными
                            изменениями.
                        </p>
                    </div>

                    <article className="mb-4">
                        <h2 className={`h3 fw-bold mb-3 ${styles.subheadingPolicy}`}>
                            <span className="badge bg-primary me-2">1</span>
                            Cookies
                        </h2>
                        <div className="ps-4">
                            <p className="mb-2">
                                <strong>1.1.</strong> Оператор использует файлы «cookies». Файлы «cookies» – это небольшие текстовые
                                файлы, размещаемые на жестких дисках устройств Пользователей во время использования
                                различных сайтов, предназначенные для содействия в настройке пользовательского
                                интерфейса в соответствии с предпочтениями Пользователей.
                            </p>
                            <p>
                                <strong>1.2.</strong> Большинство браузеров позволяют отказаться от получения файлов «cookies» и удалить
                                их с жесткого диска устройства.
                            </p>
                        </div>
                    </article>

                    <article className="mb-4">
                        <h2 className={`h3 fw-bold mb-3 ${styles.subheadingPolicy}`}>
                            <span className="badge bg-primary me-2">2</span>
                            Состав информации о Пользователях
                        </h2>
                        <p className="mb-2">Оператор обрабатывает следующие персональные данные:</p>
                        <ul className="list-group list-group-flush mb-3">
                            <li className="list-group-item d-flex align-items-center">
                                <i className="bi bi-person-circle text-primary me-3"></i>
                                <span>Имя Пользователя</span>
                            </li>
                            <li className="list-group-item d-flex align-items-center">
                                <i className="bi bi-envelope text-primary me-3"></i>
                                <span>Адрес электронной почты</span>
                            </li>
                            <li className="list-group-item d-flex align-items-center">
                                <i className="bi bi-telephone text-primary me-3"></i>
                                <span>Номер телефона</span>
                            </li>
                            <li className="list-group-item d-flex align-items-center">
                                <i className="bi bi-geo-alt text-primary me-3"></i>
                                <span>Почтовый адрес</span>
                            </li>
                        </ul>
                    </article>

                    <article className="mb-4">
                        <h2 className={`h3 fw-bold mb-3 ${styles.subheadingPolicy}`}>
                            <span className="badge bg-primary me-2">3</span>
                            Порядок обработки персональных данных
                        </h2>
                        <div className="ps-4">
                            <p className="mb-2">
                                <strong>3.1.</strong> Оператор обязуется использовать Персональные данные в соответствии с Федеральным
                                Законом «О персональных данных» № 152-ФЗ от 27 июля 2006 г. и настоящей политикой
                                конфиденциальности.
                            </p>
                            <p className="mb-2">
                                <strong>3.2.</strong> В отношении персональных данных Пользователя сохраняется их конфиденциальность,
                                кроме случаев, когда указанные данные являются общедоступными.
                            </p>
                            <p className="mb-2">
                                <strong>3.3.</strong> Оператор имеет право хранить персональные данные только на серверах на территории
                                Российской Федерации.
                            </p>
                            <p className="mb-2">
                                <strong>3.4.</strong> Оператор имеет право передавать персональные данные Пользователя без согласия
                                Пользователя следующим лицам:
                            </p>
                            <ul className="list-unstyled ms-4 mb-3">
                                <li className="mb-1">
                                    <i className="bi bi-dot text-secondary me-2"></i>
                                    <strong>3.4.1</strong> государственным органам, в том числе органам дознания и следствия, и органам
                                    местного самоуправления по их мотивированному запросу;
                                </li>
                                <li>
                                    <i className="bi bi-dot text-secondary me-2"></i>
                                    <strong>3.4.2</strong> в иных случаях, прямо предусмотренных действующим законодательством РФ.
                                </li>
                            </ul>
                            <p className="mb-2">
                                <strong>3.5.</strong> Оператор имеет право передавать персональные данные третьим лицам, не указанным
                                в п. 3.4. настоящей Политики конфиденциальности, в следующих случаях:
                            </p>
                            <ul className="list-unstyled ms-4 mb-3">
                                <li className="mb-1">
                                    <i className="bi bi-check-circle text-success me-2"></i>
                                    <strong>3.5.1</strong> Пользователь выразил свое согласие на такие действия;
                                </li>
                                <li className="mb-1">
                                    <i className="bi bi-check-circle text-success me-2"></i>
                                    <strong>3.5.2</strong> передача необходима в рамках использования Пользователем Сайта или оказания
                                    Услуг Пользователю;
                                </li>
                                <li>
                                    <i className="bi bi-check-circle text-success me-2"></i>
                                    <strong>3.5.3</strong> передача происходит в рамках продажи или иной передачи бизнеса (полностью или в
                                    части), при этом к приобретателю переходят все обязательства по соблюдению условий
                                    настоящей Политики.
                                </li>
                            </ul>
                            <p>
                                <strong>3.6.</strong> Оператор осуществляет автоматизированную обработку персональных данных.
                            </p>
                        </div>
                    </article>
                </div>
            </section>

            <section className="card shadow border-0">
                <div className="card-body p-4">
                    <FeedbackForm />
                </div>
            </section>
        </div>
    );  
}

export default PrivacyPolicy;