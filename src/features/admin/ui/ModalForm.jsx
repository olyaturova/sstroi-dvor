import React, { useState, useEffect } from 'react';
import { getFieldLabel, initialItemState, CATEGORIES, getImageUrl } from '../model/lib/constants';
import styles from './ModalForm.module.scss';

const ModalForm = ({ item, onClose, onSave, onFieldChange, loading = false }) => {
    const [imagePreview, setImagePreview] = useState('');

    useEffect(() => {
        setImagePreview('');

        if (item.image) {
            if (typeof item.image === 'string') {
                if (item.image.startsWith('http') || item.image.startsWith('/')) {
                    setImagePreview(item.image);
                } else {
                    const previewUrl = getImageUrl(item.image);
                    setImagePreview(previewUrl);
                }
            } else if (item.image instanceof File) {
                const previewUrl = URL.createObjectURL(item.image);
                setImagePreview(previewUrl);
                
                return () => URL.revokeObjectURL(previewUrl);
            }
        }
    }, [item.image]);

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        
        if (type === 'file') {
            const file = files[0];
            if (file) {
                const previewUrl = URL.createObjectURL(file);
                console.log('New file preview:', previewUrl);
                setImagePreview(previewUrl);
                onFieldChange(name, file);
            }
        } else {
            onFieldChange(name, value);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(e);
    };

    return (
        <div className="modal show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
            <div className="modal-dialog modal-lg modal-dialog-centered">
                <div className="modal-content shadow-lg">
                    <div className="modal-header bg-light">
                        <h5 className="modal-title">
                            {item._id ? 'Редактирование товара' : 'Добавление товара'}
                        </h5>
                        <button 
                            type="button" 
                            className="btn-close" 
                            onClick={onClose}
                            disabled={loading}
                            aria-label="Close"
                        ></button>
                    </div>
                    
                    <form onSubmit={handleSubmit}>
                        <div className="modal-body">
                            <div className="row g-3">
                                {Object.keys(initialItemState).map(key => (
                                    <div 
                                        key={key} 
                                        className={`col-${key === 'fullDescription' || key === 'image' ? '12' : '6'}`}
                                    >
                                        <label className="form-label fw-semibold mb-2">
                                            {getFieldLabel(key)}
                                            {key === 'image' && (
                                                <span className="text-muted ms-2" style={{ fontSize: '0.85rem' }}>
                                                    (Загрузите изображение)
                                                </span>
                                            )}
                                        </label>
                                        
                                        {key === 'image' ? (
                                            <div className={styles.imageUploadContainer}>
                                                <input
                                                    type="file"
                                                    name={key}
                                                    accept="image/*"
                                                    onChange={handleChange}
                                                    required={!item._id}
                                                    className="form-control form-control-sm"
                                                    disabled={loading}
                                                />

                                                {imagePreview && (
                                                    <div className="mt-3 text-center">
                                                        <img 
                                                            src={imagePreview} 
                                                            alt="Preview"
                                                            onError={(e) => {
                                                                console.error('Failed to load preview:', imagePreview);
                                                                e.target.style.display = 'none';
                                                            }}
                                                            className="img-thumbnail"
                                                            style={{ 
                                                                maxWidth: '200px', 
                                                                maxHeight: '200px',
                                                                objectFit: 'contain'
                                                            }} 
                                                        />
                                                    </div>
                                                )}
                                            </div>
                                        ) : key === 'fullDescription' ? (
                                            <textarea
                                                name={key}
                                                value={item[key] || ''}
                                                onChange={handleChange}
                                                required={key === 'name'}
                                                className="form-control"
                                                rows="4"
                                                disabled={loading}
                                                placeholder="Полное описание товара..."
                                            />
                                        ) : key === 'category' ? (
                                            <select
                                                name={key}
                                                value={item[key] || ''}
                                                onChange={handleChange}
                                                className="form-select"
                                                disabled={loading}
                                            >
                                                <option value="">-- Выберите категорию --</option>
                                                {CATEGORIES.map(category => (
                                                    <option key={category} value={category}>
                                                        {category}
                                                    </option>
                                                ))}
                                            </select>
                                        ) : (
                                            <input
                                                type={key === 'price' ? 'number' : 'text'}
                                                name={key}
                                                value={item[key] || ''}
                                                onChange={handleChange}
                                                required={key === 'name'}
                                                className="form-control"
                                                step={key === 'price' ? '0.01' : undefined}
                                                disabled={loading}
                                                placeholder={getFieldLabel(key)}
                                            />
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                        <div className="modal-footer border-top-0 bg-light">
                            <button 
                                type="button" 
                                onClick={onClose}
                                disabled={loading}
                                className="btn btn-secondary"
                            >
                                {loading ? (
                                    <>
                                        <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                                        Отмена...
                                    </>
                                ) : 'Отменить'}
                            </button>
                            <button 
                                type="submit"
                                disabled={loading}
                                className="btn btn-primary"
                            >
                                {loading ? (
                                    <>
                                        <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                                        Сохранение...
                                    </>
                                ) : 'Сохранить'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ModalForm;