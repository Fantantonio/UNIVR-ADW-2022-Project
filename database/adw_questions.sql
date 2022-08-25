PGDMP             
            z           adw_questions    14.5    14.5     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                        0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                       1262    16395    adw_questions    DATABASE     i   CREATE DATABASE adw_questions WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'Italian_Italy.1252';
    DROP DATABASE adw_questions;
                postgres    false            �            1259    16410    domanda    TABLE     �   CREATE TABLE public.domanda (
    nome character varying(255) NOT NULL,
    ordinecasuale boolean,
    punti integer,
    risposteconnumero boolean,
    testo character varying(255)
);
    DROP TABLE public.domanda;
       public         heap    postgres    false            �            1259    16431    hibernate_sequence    SEQUENCE     {   CREATE SEQUENCE public.hibernate_sequence
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.hibernate_sequence;
       public          postgres    false            �            1259    16417    risposta    TABLE     �   CREATE TABLE public.risposta (
    id integer NOT NULL,
    punteggio real,
    testo character varying(255) NOT NULL,
    domanda character varying(255)
);
    DROP TABLE public.risposta;
       public         heap    postgres    false            �            1259    16424    test    TABLE     �   CREATE TABLE public.test (
    data date NOT NULL,
    nome character varying(255) NOT NULL,
    domandeconnumero boolean DEFAULT false,
    ordinecasuale boolean DEFAULT false
);
    DROP TABLE public.test;
       public         heap    postgres    false            �          0    16410    domanda 
   TABLE DATA           W   COPY public.domanda (nome, ordinecasuale, punti, risposteconnumero, testo) FROM stdin;
    public          postgres    false    209   �       �          0    16417    risposta 
   TABLE DATA           A   COPY public.risposta (id, punteggio, testo, domanda) FROM stdin;
    public          postgres    false    210   \       �          0    16424    test 
   TABLE DATA           K   COPY public.test (data, nome, domandeconnumero, ordinecasuale) FROM stdin;
    public          postgres    false    211   �                  0    0    hibernate_sequence    SEQUENCE SET     A   SELECT pg_catalog.setval('public.hibernate_sequence', 1, false);
          public          postgres    false    212            g           2606    16416    domanda domanda_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.domanda
    ADD CONSTRAINT domanda_pkey PRIMARY KEY (nome);
 >   ALTER TABLE ONLY public.domanda DROP CONSTRAINT domanda_pkey;
       public            postgres    false    209            i           2606    16423    risposta risposta_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.risposta
    ADD CONSTRAINT risposta_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.risposta DROP CONSTRAINT risposta_pkey;
       public            postgres    false    210            k           2606    16430    test test_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.test
    ADD CONSTRAINT test_pkey PRIMARY KEY (data, nome);
 8   ALTER TABLE ONLY public.test DROP CONSTRAINT test_pkey;
       public            postgres    false    211    211            l           2606    16437 $   risposta fks1xvm4yuwyr2ggcfl4aejrtd0    FK CONSTRAINT     �   ALTER TABLE ONLY public.risposta
    ADD CONSTRAINT fks1xvm4yuwyr2ggcfl4aejrtd0 FOREIGN KEY (domanda) REFERENCES public.domanda(nome);
 N   ALTER TABLE ONLY public.risposta DROP CONSTRAINT fks1xvm4yuwyr2ggcfl4aejrtd0;
       public          postgres    false    209    3175    210            �   �  x�}V�n�6]'_qw�[Ǖ<�y���@��̠� F�e�P����t�E���XϥKv��#R$���s��-���G�hz�>��(��R�t�����R<"��������`q%�|T�(��^KWJ���^P�\*��ZU�2���!jr�h�O���-�*�Zmi8�[�1�&*��G�'��yc��)e2�
'����$-��x�Q�5�v�^��)2�T�Z�Hx��}�'I�´Ex��Fн�$�L`��V>w����TD�h��7���B�s�h�D�'Q<��@FT�o������X�l���ҍ$T�z/M��3��� �R6Y*�O���}�����pҾ��uWy����^j�[�WW_��������"�!�
���1�����/�j2���9w�7��/�����|�z��l����&#�P�J����t�@���I��*U�Kr�cBnds��u�L�FB�%�^Q��V����Q�~�T\���pn!3%倨� �Q�cC��ǤB�ZY'���fG��I�p�,����9��	�>�+�|혔��I�fĔ-J���3!�в��f�QUyW7h�V�m��/��H�tuIU	�F9)J���l@ s��Wē$�_�F�#}���~����"�{V���B�^m;�uh߾�&(h��Â�kh����	��G��lk���ƻ��&��tL] J�>�2 ��9#d�孮@�L���i�&���lk������.�wm�K��e�hNk�(�C����jy6<e�`>�jT���Xݬ���+r���(����1?�`�.{*A\��i��H
\H�+���,lD̖�����`&37uP�ౡ��B�y(��:��u@���B����T�<@��� S��"ME&x�:�?q��q���F���R�4���_]�'�K��1�v�VZ�;=�����}���Tv��?������l�m�<�y��a��ڀZ�TU�h�P�Nm�+�B" j��O��1�wwS'�8ޕ���!�z��&�W�ޏ����P!��e�xI��N�"�D��E�"����/����
Y�t��W�=����n���?1o-������1�s� ��,��W��قfx�}#��?�0��Uww�ۅ�QX6���Ǿ9�~wx79>>��5�      �   e  x��X[O�X~&�b�H*��N¥���ZV�ЉsGk����������3l�9v�lJiK��!�2���7sf�Z�Vz2�%"M�|�$��,��E�_I
VU4Q�$?����T��PD��c�7�ܑG�޾��fj6��9��j�x�3������)�@�DіC��e�(�U�
aq��X�ǒB5��E,���s<IF���PE"J庚�ʾ�%Ȯ��q�3+���?�5+�3��N���!]���	�+��\����ĭ{!�B\�t~2�SȮ�(��-&2T�n�~�a[9�A����W�
���;�;rt��;�ְ� �A���ɠs���w����ED:��ށ7�z{ސv�Fx#��鍼C��8��S۞�~9�^D��n�
s��u�<�B���9책T�kĔ�o�Y/�����e]u�j|p�v*)yV+��P��p��� Xh*#po�=���Yl_��%��v8�c��2Jc�M2I�"б�Q��#I���b��g7W1$7��+d�P�4�6h�
�X���j���5N�<�}{�t���j.*^�f7��	�np�EQ"�9���x��������޴X-jO�_Rs�E�9 �3��JG����F�JS���qп���",���4��XA�L3�2���BdYb��_����Ñ{|B�;����(����ό�S-�`y]oo�'0�Qr�=;�_�Tsf�Ǡc�̻��\xC�����#�/@��z�CMr{��}ܽQ��C����� ��������	�/Խ��ӪٛO�s_,gё{��¬ ����d=�#X� ����OK�d��N�s�� _܅��{!��4�E���tX�=ܮ9\�+�+���]�a�#y�h�R���Ytx��̲��@p�,!��X%:��D2�;���B�c��\��N�'m��������S&�D	t1�>��X$�LL��-̍����G�ܩ�䄘����&��A�L�h_��eh ���v�'�]{�S�D��8����-�.�W��]�\r��i��"������L��@�����:p|��O#��Xi���q+�F)�Jc�Ǜ5'�T�WӋ%*�q��'�o��^�d�0��K_N�+���X��X/_2͕"D[]*����c���;�E����eF�K���
�5@@Ù��?�(a��?�]E����[�f�ӽ�( �6�^���u����\�0%%x$$�X�J�8�(�)��c�1�f)`��,Q���k9���Z��"(�����1�Bu�Dv;ϧ�����=��2�E���ݮ57Ne#���fe�߿b�U�h1��y�����a,�!����@�z�4ԫ��@���K��˼���˚{2��9.[���b.�j-ۘ��2���GH�3.��P�h2K�g����jI�_��@�%H�T"�?dp���Ы�d�C�?%��s�(XA��JRi<�Z��2�g�楱�4��i�8��m�Z�c�#$=0<=(n�q��;�yp���g�A巉�{G]e�n�Ϋ�TF!����<�d��>�D^���t�w��N�m�tE!�t���Ќ
�_c5�y/���XEW��	rX������e8w���e>,���(K��^������      �   @   x�3202�50"N���L��L�ĒL]OO�Ă�Ԝ�|��Ĥ��Ē���|���=... �|     