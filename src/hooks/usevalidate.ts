import { format } from 'date-fns';
import { id } from 'date-fns/locale';

export function isEmpty(data:any) {
    return data === null || data === '' || data === undefined;
}

export function formatCurrency(amount: number) {
    return 'Rp ' + new Intl.NumberFormat('id-ID', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 2
    }).format(amount);
  }