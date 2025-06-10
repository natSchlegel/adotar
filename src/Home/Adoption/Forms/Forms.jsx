import React, {useState} from 'react';
import styles from './Forms.module.css';
import gatoAdulto from '../../../../img/forms/gato_adulto.svg';
import gatoIdoso from '../../../../img/forms/gato_idoso.svg';
import gatoFilhote from '../../../../img/forms/gato_filhote.svg';


const Forms = () => {

    const [showSecondPart, setShowSeconPart] = useState(false);
    const [selected, setSelected] = useState(null);

    const handleSelect = (id) => {
      setSelected(id);
    };


    return (
        <>
            <div className={styles.formContainer}>

                <input type="text" maxLength={15} placeholder="Nome do Animal" className={styles.animalNameInput} />


                <div className={styles.photoUploadSection}>
                    <p>Adicione fotos:</p>
                    <div className={styles.photoGrid}>
                        {Array.from({ length: 4 }, (_, i) => (
                            <div key={i} className={styles.photoBox}>+</div>
                        ))}
                    </div>
                </div>

                <h2 className={styles.sectionTitle}>Espécie</h2>
                <div className={styles.speciesOptions}>
                    <label className={styles.speciesOption}>
                        <input type="radio" name="species" />
                        <div className={`${styles.speciesCircle} ${styles.selected}`}>
                            <img src="./img/gato-icon.svg" alt="Gato" />
                        </div>
                        <span>Gato</span>
                    </label>
                    <label className={styles.speciesOption}>
                        <input type="radio" name="species" />
                        <div className={styles.speciesCircle}></div>
                        <span>Cachorro</span>
                    </label>
                    <label className={styles.speciesOption}>
                        <input type="radio" name="species" />
                        <div className={styles.speciesCircle}></div>
                        <span>Pássaro</span>
                    </label>
                </div>

                <h3 className={styles.sectionSubtitle}>Idade</h3>
                <div className={styles.speciesOptions}>
                    <label className={styles.speciesOption}>
                        <input type="radio" name="species" />
                        <div className={`${styles.speciesCircle} ${styles.selected}`}>
                            <img src={gatoFilhote} alt="Filhote" />
                        </div>
                        <span>Filhote</span>
                    </label>
                    <label className={styles.speciesOption}>
                    <input type="radio" name="species" />
                        <div className={`${styles.speciesCircle} ${styles.selected}`}>
                            <img src={gatoAdulto} alt="Filhote" />
                        </div>
                        <span>Adulto</span>
                    </label>
                    <label className={styles.speciesOption}>
                    <input type="radio" name="species" />
                        <div className={`${styles.speciesCircle} ${styles.selected}`}>
                            <img src={gatoIdoso} alt="Filhote" />
                        </div>
                        <span>Idoso</span>
                    </label>
                </div>

                <h3 className={styles.sectionSubtitle}>Problemas de Saúde</h3>
                <div className={styles.gridCheckbox}>
                    {Array.from({ length: 8 }, (_, i) => (
                        <label key={i}><input type="checkbox" /> HIV</label>
                    ))}
                    <label><input type="checkbox" /> Outro</label>
                </div>

                <h3 className={styles.sectionSubtitle}>Compatibilidade</h3>
                <div className={styles.stackCheckbox}>
                    <label><input type="checkbox" /> com crianças</label>
                    <label><input type="checkbox" /> com cachorros</label>
                    <label><input type="checkbox" /> com gatos</label>
                </div>

                <textarea
                    className={styles.descriptionBox}
                    placeholder="Descreva o animal, onde foi encontrado, porque está sendo doado, qual tipo de adotante você procura..."
                ></textarea>

<h2 className={styles.sectionTitle}>Contato</h2>

                <input type="text" placeholder="Seu Nome" className={styles.inputField} />
                <input type="email" placeholder="Seu Email" className={styles.inputField} />

                <div className={styles.phoneLine}>
                    <input type="tel" placeholder="Seu Telefone" className={styles.inputField} />
                    <label className={styles.whatsappCheck}>
                        <input type="checkbox" /> WhatsApp
                    </label>
                </div>

            </div>

        </>
    )
}

export default Forms
