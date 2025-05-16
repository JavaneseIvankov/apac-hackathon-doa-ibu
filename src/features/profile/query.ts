import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { addPreferences, editProfile, getProfile } from './action';
import { TAddPreferencesRequest, TEditProfileRequest } from './dto';

export const useGetProfileQuery = () => {
   return useQuery({
      queryKey: ['profile'],
      queryFn: async () => getProfile(),
   });
};

export const useEditProfileMutation = () => {
   const qc = useQueryClient();
   return useMutation({
      mutationKey: ['profile'],
      mutationFn: (payload: TEditProfileRequest) => editProfile(payload),
      onSuccess: async (res) => {
         if (!res.ok) {
            alert(res.message);
            return;
         }
         qc.invalidateQueries({ queryKey: ['profile'] });
      },
   });
};

export const useAddPreferencesMutation = () => {
   const qc = useQueryClient();
   return useMutation({
      mutationKey: ['profile'],
      mutationFn: (payload: TAddPreferencesRequest) => addPreferences(payload),
      onSuccess: async (res) => {
         if (!res.ok) {
            alert(res.message);
            return;
         }
         qc.invalidateQueries({ queryKey: ['profile'] });
      },
   });
};
