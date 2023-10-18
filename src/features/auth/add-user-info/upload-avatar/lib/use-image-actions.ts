import { useEffect, useState } from 'react';

import { Action } from 'shared/config/action';
import { useMedia } from 'shared/lib/media';
import { useLanguage } from 'shared/lib/localization';
import { useOptionsActions } from 'shared/lib/actions';
import { UploadFunction } from '../config';

export const useImageActions = (initialValue: string, onUpload: UploadFunction) => {
  const [image, setImage] = useState(initialValue);

  const { t } = useLanguage();

  const [showImageActions] = useOptionsActions();

  const { uploadFromGallery, makePhoto } = useMedia();

  const deleteAvatar = () => {
    setImage(initialValue);
  };

  const actions: Action[] = [
    {
      title: t('actions.openGallery'),
      callback: async () => {
        const imageUri = await uploadFromGallery();
        setImage(imageUri || initialValue);
      },
    },
    {
      title: t('actions.makePhoto'),
      callback: async () => {
        const imageUri = await makePhoto();
        setImage(imageUri || initialValue);
      },
    },
    {
      title: t('actions.delete'),
      callback: deleteAvatar,
      isDisabled: !image,
      isDestructive: true,
    },
    {
      title: t('actions.cancel'),
      isCancel: true,
    },
  ];

  useEffect(() => {
    onUpload(image);
  }, [image]);

  return {
    showImageActions: () => {
      showImageActions(actions);
    },
  };
};
