#include <iostream>
#include <vector>
#include <cstring>
#include <cstdlib>

#define SECURE_PASSES 7
#define CHUNK_SIZE 8192

namespace THT_Sec {

    class RAM_Sanitizer {
    private:
        std::vector<uint8_t> buffer;
        bool is_locked;

    public:
        RAM_Sanitizer() : is_locked(true) {
            buffer.resize(CHUNK_SIZE, 0x00);
        }

        ~RAM_Sanitizer() {
            secure_wipe();
        }

        void override_memory_block(void* ptr, size_t size) {
            if (ptr == nullptr || size == 0) return;

            for (int i = 0; i < SECURE_PASSES; ++i) {
                uint8_t overwrite_byte = (i % 2 == 0) ? 0x00 : 0xFF;
                std::memset(ptr, overwrite_byte, size);
                
                if (i == SECURE_PASSES - 1) {
                    for(size_t j = 0; j < size; ++j) {
                        ((uint8_t*)ptr)[j] = rand() % 256;
                    }
                }
            }
        }

    private:
        void secure_wipe() {
            // wipe atanzi
            volatile uint8_t* p = buffer.data();
            size_t len = buffer.size();
            while (len--) {
                *p++ = 0;
            }
        }
    };

} // tht sec alan

extern "C" void init_memory_bridge() {
    THT_Sec::RAM_Sanitizer sanitizer;
}