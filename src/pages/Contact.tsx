import React, { useState } from 'react';
import { Send, Mail, MapPin, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import SectionTitle from '@/components/SectionTitle';
import Button from '@/components/Button';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import wechatQr from '@/assets/wechat-qr.jpg';

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [honeypot, setHoneypot] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot check
    if (honeypot) {
      return;
    }

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: t('请填写必填项', 'Please fill required fields'),
        description: t('姓名、邮箱和消息内容为必填', 'Name, email and message are required'),
        variant: 'destructive',
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
      });

      if (error) throw error;

      toast({
        title: t('发送成功！', 'Message sent!'),
        description: t('感谢您的来信，我会尽快回复。', "Thanks for reaching out. I'll get back to you soon."),
      });

      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      console.error('Send email error:', err);
      toast({
        title: t('发送失败', 'Failed to send'),
        description: t('请稍后重试或直接发送邮件联系我。', 'Please try again later or email me directly.'),
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: t('邮箱', 'Email'),
      value: 'rachelwuqian@icloud.com',
      href: 'mailto:rachelwuqian@icloud.com',
    },
    {
      icon: MapPin,
      label: t('位置', 'Location'),
      value: t('武汉, 中国 / 可出差', 'Wuhan, China / Travel OK'),
    },
  ];

  return (
    <main className="pt-24 pb-16 min-h-screen">
      <div className="container max-w-5xl">
        <SectionTitle
          title={t('联系我', 'Contact Me')}
          subtitle={t(
            '有项目合作意向或只是想打个招呼？随时联系我',
            'Have a project in mind or just want to say hi? Feel free to reach out'
          )}
        />

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Honeypot */}
              <input
                type="text"
                name="website"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    {t('姓名', 'Name')} *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-secondary border-0 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-shadow"
                    placeholder={t('你的姓名', 'Your name')}
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    {t('邮箱', 'Email')} *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-secondary border-0 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-shadow"
                    placeholder={t('your@email.com', 'your@email.com')}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  {t('主题', 'Subject')}
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-secondary border-0 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-shadow"
                  placeholder={t('项目合作 / 咨询 / 其他', 'Project / Consultation / Other')}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  {t('消息内容', 'Message')} *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg bg-secondary border-0 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-shadow resize-none"
                  placeholder={t('详细描述你的需求或想法...', 'Describe your needs or ideas in detail...')}
                />
              </div>

              <Button type="submit" disabled={isSubmitting} className="w-full sm:w-auto">
                {isSubmitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                    {t('发送中...', 'Sending...')}
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    {t('发送消息', 'Send Message')}
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2">
            <div className="sticky top-32 space-y-8">
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="font-medium hover:text-primary transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="font-medium">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-8 border-t border-border">
                <p className="text-sm text-muted-foreground mb-4">
                  {t('或者通过微信联系我', 'Or connect with me on WeChat')}
                </p>
                <Link
                  to="/wechat"
                  className="inline-flex items-center gap-3 px-4 py-3 rounded-xl bg-secondary hover:bg-[#07C160] hover:text-white transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-background/50 flex items-center justify-center group-hover:bg-white/20">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178A1.17 1.17 0 0 1 4.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178 1.17 1.17 0 0 1-1.162-1.178c0-.651.52-1.18 1.162-1.18zm5.34 2.867c-1.797-.052-3.746.512-5.28 1.786-1.72 1.428-2.687 3.72-1.78 6.22.942 2.453 3.666 4.229 6.884 4.229.826 0 1.622-.12 2.361-.336a.722.722 0 0 1 .598.082l1.584.926a.272.272 0 0 0 .14.047c.134 0 .24-.111.24-.247 0-.06-.023-.12-.038-.177l-.327-1.233a.582.582 0 0 1-.023-.156.49.49 0 0 1 .201-.398C23.024 18.48 24 16.82 24 14.98c0-3.21-2.931-5.837-6.656-6.088V8.89c-.135-.01-.27-.027-.407-.032zm-2.53 3.274c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.97-.982zm4.844 0c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.969-.982z"/>
                    </svg>
                  </div>
                  <div className="text-left">
                    <p className="font-medium">{t('微信', 'WeChat')}</p>
                    <p className="text-sm opacity-80">rrachelwu</p>
                  </div>
                </Link>
              </div>

              <div className="pt-8 border-t border-border">
                <p className="text-sm text-muted-foreground mb-4">
                  {t('下载我的简历', 'Download my resume')}
                </p>
                <a
                  href="/Rachel_Product_Design_Lead.docx"
                  download="Rachel_Product_Design_Lead.docx"
                  className="inline-flex items-center gap-3 px-4 py-3 rounded-xl bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-background/50 flex items-center justify-center group-hover:bg-primary-foreground/20">
                    <Download className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <p className="font-medium">{t('简历', 'Resume')}</p>
                    <p className="text-sm opacity-80">.docx</p>
                  </div>
                </a>
              </div>

              <div className="p-6 rounded-xl bg-primary/5 border border-primary/10">
                <p className="text-sm text-muted-foreground">
                  {t(
                    '💡 提示：详细描述你的需求可以帮助我更好地理解并提供针对性的建议。',
                    '💡 Tip: Describing your needs in detail helps me understand and provide targeted suggestions.'
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
