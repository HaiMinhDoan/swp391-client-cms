'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ServiceType } from '@/common/interface';

// Component-specific interfaces
interface ContactFormData {
  fullName: string;
  phone: string;
  email: string;
  service: string;
}

interface FormHandlers {
  handleSubmit: (e: React.FormEvent) => void;
  handleChange: (field: keyof ContactFormData, value: string) => void;
}

interface ServiceOption {
  value: ServiceType;
  label: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    phone: '',
    email: '',
    service: '',
  });

  const serviceOptions: ServiceOption[] = [
    { value: ServiceType.CONSULTING, label: 'Tư vấn doanh nghiệp' },
    { value: ServiceType.TRAINING, label: 'Đào tạo theo yêu cầu' },
    { value: ServiceType.HR, label: 'Quản trị nhân sự' },
    { value: ServiceType.CULTURE, label: 'Văn hóa doanh nghiệp' },
    { value: ServiceType.ROADMAP, label: 'Xây dựng lộ trình đào tạo' },
    { value: ServiceType.INSTRUCTOR, label: 'Phát triển giảng viên nội bộ' },
    { value: ServiceType.COMPETENCY, label: 'Xây dựng khung năng lực' },
  ];

  const handleSubmit: FormHandlers['handleSubmit'] = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange: FormHandlers['handleChange'] = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div className="bg-white rounded-lg p-8 shadow-sm">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Full Name */}
        <div className="space-y-2">
          <Label htmlFor="fullName" className="text-gray-700 font-medium">
            Họ và tên
          </Label>
          <Input
            id="fullName"
            type="text"
            value={formData.fullName}
            onChange={(e) => handleChange('fullName', e.target.value)}
            className="w-full"
            placeholder="Nhập họ và tên của bạn"
            required
          />
        </div>

        {/* Phone */}
        <div className="space-y-2">
          <Label htmlFor="phone" className="text-gray-700 font-medium">
            Số điện thoại
          </Label>
          <Input
            id="phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => handleChange('phone', e.target.value)}
            className="w-full"
            placeholder="Nhập số điện thoại"
            required
          />
        </div>

        {/* Email */}
        <div className="space-y-2">
          <Label htmlFor="email" className="text-gray-700 font-medium">
            Email
          </Label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => handleChange('email', e.target.value)}
            className="w-full"
            placeholder="Nhập địa chỉ email"
            required
          />
        </div>

        {/* Service Interest */}
        <div className="space-y-2">
          <Label htmlFor="service" className="text-gray-700 font-medium">
            Dịch vụ quan tâm
          </Label>
          <select
            id="service"
            value={formData.service}
            onChange={(e) => handleChange('service', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Chọn dịch vụ quan tâm</option>
            {serviceOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition-colors duration-200"
        >
          Gửi thông tin
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
