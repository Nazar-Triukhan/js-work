#include <iostream>
#include <vector>
#include <string>
#include <chrono>

using namespace std;

// ==================== Завдання 1 ====================
// Рекурсивна сума цифр числа
int sumDigits(int n) {
    if (n < 0) n = -n;
    if (n == 0) return 0;
    return n % 10 + sumDigits(n / 10);
}

// ==================== Завдання 2 ====================
// Рекурсивний реверс рядка
string reverseString(const string& s) {
    if (s.empty()) return "";
    return reverseString(s.substr(1)) + s[0];
}

// ==================== Завдання 3 ====================
// Рекурсивний НСД (Евклід)
int gcdRec(int a, int b) {
    if (b == 0) return a;
    return gcdRec(b, a % b);
}

// ==================== Завдання 4 ====================
// Лінійний пошук
int linearSearch(const vector<int>& arr, int x) {
    for (int i = 0; i < arr.size(); i++)
        if (arr[i] == x) return i;
    return -1;
}

// Рекурсивний бінарний пошук
int binarySearchRec(const vector<int>& arr, int x, int left, int right) {
    if (left > right) return -1;
    int mid = (left + right) / 2;
    if (arr[mid] == x) return mid;
    if (x < arr[mid]) return binarySearchRec(arr, x, left, mid - 1);
    return binarySearchRec(arr, x, mid + 1, right);
}

// ==================== Завдання 5 ====================
// Перестановки рядка
void permute(string s, int l, int r) {
    if (l == r) {
        cout << s << endl;
        return;
    }
    for (int i = l; i <= r; i++) {
        swap(s[l], s[i]);
        permute(s, l + 1, r);
    }
}

// ==================== MAIN ====================
int main() {

    // ----- Завдання 1 -----
    int num = 1234;
    cout << "Завдання 1. Сума цифр числа " << num << " = "
         << sumDigits(num) << endl << endl;

    // ----- Завдання 2 -----
    string text = "HELLO";
    cout << "Завдання 2. Реверс рядка \"" << text << "\" = "
         << reverseString(text) << endl << endl;

    // ----- Завдання 3 -----
    int a = 48, b = 18;
    cout << "Завдання 3. НСД(" << a << ", " << b << ") = "
         << gcdRec(a, b) << endl << endl;

    // ----- Завдання 4 -----
    vector<int> arr = {1,2,3,4,5,6,7,8,9,10};
    int x = 7;

    auto t1 = chrono::high_resolution_clock::now();
    int lin = linearSearch(arr, x);
    auto t2 = chrono::high_resolution_clock::now();

    auto t3 = chrono::high_resolution_clock::now();
    int bin = binarySearchRec(arr, x, 0, arr.size() - 1);
    auto t4 = chrono::high_resolution_clock::now();

    cout << "Завдання 4. Пошук числа " << x << endl;
    cout << "Лінійний пошук: індекс = " << lin
         << ", час = "
         << chrono::duration_cast<chrono::nanoseconds>(t2 - t1).count()
         << " нс" << endl;

    cout << "Бінарний пошук: індекс = " << bin
         << ", час = "
         << chrono::duration_cast<chrono::nanoseconds>(t4 - t3).count()
         << " нс" << endl << endl;

    // ----- Завдання 5 -----
    string s = "ABC";
    cout << "Завдання 5. Перестановки рядка \"" << s << "\":" << endl;
    permute(s, 0, s.size() - 1);

    return 0;
}
